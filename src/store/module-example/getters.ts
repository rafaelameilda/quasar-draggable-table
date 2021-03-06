import { GetterTree } from "vuex";
import { StateInterface } from "../index";
import { ExampleStateInterface } from "./state";

const getters: GetterTree<ExampleStateInterface, StateInterface> = {
  PEGADATA(state) {
    return state;
  },
};

export default getters;
