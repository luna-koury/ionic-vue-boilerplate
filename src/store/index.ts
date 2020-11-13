import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";

// define tipos pro state da store
export interface State {
  count: number;
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state() {
    return {
      count: 1,
    };
  },
});

// o usar `import useStore from '@store'`
export default function useStore() {
  return baseUseStore(key);
}
