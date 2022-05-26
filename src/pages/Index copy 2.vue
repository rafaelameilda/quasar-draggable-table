<template>
  <q-card>
    <q-card-section>
      <q-grid
        :data="data"
        :columns="columns"
        :columns_filter="true"
        :draggable="true"
        selection="multiple"
        :csv_download="true"
        file_name="sample"
        :groupby_filter="true"
        :selected="selected"
        @selected-val="GetSelected($event)"
        row-key="codprod"
        v-model:pagination="initialPagination"
      ></q-grid>
    </q-card-section>
    <q-card-section>
      <q-btn @click="getTickets"> TENTA PESQUISAR</q-btn>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent, ref, onBeforeMount } from "vue";
import { useStore } from "vuex";

const columns = [
  {
    name: "codprod",
    align: "left",
    label: "Codigo",
    field: "codprod",
    sortable: true,
  },
  {
    name: "descricao",
    grouping: true,
    align: "left",
    label: "Descrição",
    field: "descricao",
    sortable: true,
    filter_type: "select",
  },
  {
    name: "embalagem",
    grouping: true,
    align: "left",
    label: "Embalagem",
    field: "embalagem",
    sortable: true,
    filter_type: "select",
  },
  {
    name: "alerta",
    align: "left",
    label: "Alerta",
    field: "alerta",
    sortable: true,
  },
  {
    name: "mensagem",
    align: "left",
    label: "Mensagem",
    field: "mensagem",
    sortable: true,
  },
  {
    name: "codendereco",
    align: "left",
    label: "Cód End.",
    field: "codendereco",
    sortable: true,
  },
  {
    name: "deposito",
    align: "left",
    label: "Dep",
    field: "deposito",
    sortable: true,
  },
  {
    name: "rua",
    align: "left",
    label: "Rua",
    field: "rua",
    sortable: true,
  },
  {
    name: "predio",
    align: "left",
    label: "Predio",
    field: "predio",
    sortable: true,
  },
  {
    name: "nivel",
    align: "left",
    label: "Nivel",
    field: "nivel",
    sortable: true,
  },
  {
    name: "apto",
    align: "left",
    label: "Apto",
    field: "apto",
    sortable: true,
  },
  {
    name: "info",
    align: "left",
    label: "Info",
    field: "info",
    sortable: true,
  },
];
export default {
  setup() {
    let selected = ref([]);
    const data = ref([]);
    const store = useStore();

    onBeforeMount(async () => {
      await getTickets();
    });

    const getTickets = async () => {
      const { content } = await store.dispatch(
        "example/GETDADOS",
        "vai se lascar q deu certo"
      );
      const newDada = [...content];
      data.value = newDada;
      store.commit("example/SET_DATA", content);
    };

    const onRequest = async (props) => {
      pagination = { ...props };
      console.log(props);
      await getTickets();
    };

    // const pagination = ref({
    //   page: 1,
    //   rowsPerPage: 5,
    //   rowsNumber: 1,
    // });

    return {
      columns,
      data,
      selected,
      //  pagination,
      GetSelected(Selected) {
        console.log(Selected);
      },
      getTickets,
      onRequest,
      DraggedColumn(data) {
        console.log(data);
      },
      initialPagination: {
        sortBy: "desc",
        descending: false,
        page: 1,
        rowsPerPage: 3,
        // rowsNumber: xx if getting data from a server
      },
    };
  },
};
</script>
