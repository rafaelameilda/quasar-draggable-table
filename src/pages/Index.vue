<template>
  <q-card>
    <q-card-section>
      <q-grid
        :data="data"
        :columns="grid"
        :columns_filter="true"
        :draggable_columns="true"
        :fullscreen="true"
        :csv_download="true"
        :global_search="true"
        selection="multiple"
        :selected="selected"
        @selected-val="GetSelected($event)"
        @dragged_column="DraggedColumn($event)"
      >
      </q-grid>
    </q-card-section>
    <q-card-section>
      <q-btn @click="getTickets"> TENTA PESQUISAR</q-btn>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent, ref, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { uid } from "quasar";

let columns = [
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

export default defineComponent({
  name: "Grouping",
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
      const xx = content.map((item) => {
        item.name = uid();
        return item;
      });

      data.value = xx;
      store.commit("example/SET_DATA", content);
    };

    const getGrids = () => {
      const gridSaved = localStorage.getItem("@@grid");

      if (!gridSaved) {
        console.log("In Set");
        localStorage.setItem("@@grid", JSON.stringify(columns.value));
        return columns;
      } else {
        columns = JSON.parse(gridSaved);
      }

      return columns;
    };

    // function changePosition(arr, from, to) {
    //   arr.splice(to, 0, arr.splice(from, 1)[0]);
    //   return arr;
    // }

    const DraggedColumn = (data) => {
      localStorage.setItem("@@grid", JSON.stringify(columns));
    };

    return {
      grid: getGrids(),
      data,
      selected,
      GetSelected(Selected) {
        console.log(Selected);
      },
      getTickets,
      DraggedColumn,
    };
  },
});
</script>
