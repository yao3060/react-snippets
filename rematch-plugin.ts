import { Plugin, Models } from "@rematch/core";

export default function InitStorePlugin<
  TModels extends Models<TModels>,
  TExtraModels extends Models<TModels> = Record<string, never>
>(): Plugin<TModels, TExtraModels> {

  return {
    onStoreCreated(store) {
      store.dispatch({ type: "settings/fetchData", payload: {} });
    },
  };
}
