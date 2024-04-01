import { FilterQuery, Model, QueryOptions } from 'mongoose';
import { BaseEntity } from 'src/modules/shared';
import { FindAllResponse } from 'src/types/common.type';
import { BaseRepositoryInterface } from './base.interface.repository';

export abstract class BaseRepositoryAbstract<T extends BaseEntity>
  implements BaseRepositoryInterface<T>
{
  protected constructor(private readonly model: Model<T>) {
    this.model = model;
  }

  async create(dto: T | any): Promise<T> {
    const created_data = await this.model.create(dto);
    await created_data.save();
    return created_data;
  }

  async findOneById(id: string): Promise<T> {
    const item = await this.model.findById(id);
    return item.deleted_at ? null : item;
  }

  async findOneByCondition(condition = {}): Promise<T> {
    return await this.model
      .findOne({
        ...condition,
        deleted_at: null,
      })
      .exec();
  }

  async findAll(
    condition: FilterQuery<T>,
    options?: QueryOptions<T>,
  ): Promise<FindAllResponse<T>> {
    const [count, items] = await Promise.all([
      this.model.countDocuments({ ...condition, deleted_at: null }),
      this.model.find(
        { ...condition, deleted_at: null },
        options?.projection,
        options,
      ),
    ]);
    return {
      count,
      items,
    };
  }

  async update<T>(id: string, dto: any): Promise<T> {
    const updatedDocument = await this.model.findByIdAndUpdate(id, dto, {
      new: true,
    });

    if (!updatedDocument) {
      throw new Error('Document not found or could not be updated');
    }

    return updatedDocument as T;
  }

  async softDelete(id: string): Promise<boolean> {
    const delete_item = await this.model.findById(id);
    if (!delete_item) {
      return false;
    }

    return !!(await this.model
      .findByIdAndUpdate<T>(id, { deleted_at: new Date() })
      .exec());
  }

  async permanentlyDelete(id: string): Promise<boolean> {
    const delete_item = await this.model.findById(id);
    if (!delete_item) {
      return false;
    }
    return !!(await this.model.findByIdAndDelete(id));
  }
}
