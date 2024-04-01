import { BaseRepositoryInterface } from "src/repositories/base";
import { Joke } from "../entities";

export interface JokeRepositoryInterface
  extends BaseRepositoryInterface<Joke> {}
