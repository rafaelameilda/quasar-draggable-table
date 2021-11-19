import { MutationTree } from "vuex";
import { ExampleStateInterface } from "./state";

const mutation: MutationTree<ExampleStateInterface> = {
  SET_DATA(state, data) {
    state.prop = data;
  },
};

export default mutation;
