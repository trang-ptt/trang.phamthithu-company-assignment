import { BaseRepositoryInterface } from "src/repositories/base";
import { Vote } from "../entities";

export interface VoteRepositoryInterface
  extends BaseRepositoryInterface<Vote> {}
