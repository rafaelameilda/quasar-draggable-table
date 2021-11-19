import { ActionTree } from "vuex";
import { StateInterface } from "../index";
import { ExampleStateInterface } from "./state";
import { Loading } from "quasar";
import axios from "axios";

const api = axios.create({});

const actions: ActionTree<ExampleStateInterface, StateInterface> = {
  GETDADOS({ commit }, data) {
    Loading.show({
      message: String(data),
    });
    return new Promise(async (resolve, reject) => {
      await api
        .get(
          "http://srvappweb02:8080/gateway/wms-auditoria-apanha?parimpar=TODOS&tipoAlerta=TODOS&codmsg=&tipo=V&codfilial=3&deposito=3&rua=1&rua2=2&predio1=1&predio2=20&pageSize=999999&data_extrato=01%2F01%2F2020"
        )
        .then((res) => {
          Loading.hide();
          resolve(res.data);
        })
        .catch((error) => {
          Loading.hide();
          reject(error);
        });
    });
  },
};

export default actions;
