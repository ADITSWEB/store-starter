import { Store as StoreData  } from "../data/store";
import type { Store } from "../types/store";

export class StoreService {
  static async getStore(): Promise<Store> {
    return StoreData;
  }
}