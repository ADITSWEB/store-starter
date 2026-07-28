import { Store as StoreData  } from "../data/store";
import type { Store } from "../types/store";
import { ApiClient } from "./APIClient";
import { API } from ".";
import { storeImage } from "@/lib/imagekit";

const api = new ApiClient(
  import.meta.env.PUBLIC_API_BASE,
  "store"
);
export class StoreService {
  static _populateWithImage(store: Store): Store {
    return {
      ...store,
      logo: storeImage("logo"),
      hero: storeImage("hero")
    };
  }
  static async getStore(): Promise<Store> {
    // return StoreData;
    const storeData = await api.get<Store>();
    // console.info('storeData', StoreData)
    return this._populateWithImage(storeData) as Store;
  }
}