import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    event: [],
    displayEvent: [],
    rows: 0
  },
  mutations: {
    SET_EVENT(state, event) {
      state.event = event;
    },
    SET_ROWS(state, rows) {
      state.rows = rows;
    },
    SET_DISPLAY_EVENT(state, displayEvent) {
      state.displayEvent = displayEvent;
    }
  },
  actions: {
    async fetchData() {
      return new Promise(resolve => {
        setTimeout(async () => {
          const res = await fetch("event.json");
          const val = await res.json();
          resolve(val);
        });
      });
    },
    async fetchEvent({ dispatch, commit }) {
      const myJson = await dispatch("fetchData");
      commit("SET_EVENT", myJson);
      const displayEvent = myJson.slice(0, 3);
      commit("SET_DISPLAY_EVENT", displayEvent);
      commit("SET_ROWS", myJson.length);
    },
    async paginate({ commit, state }, { currentPage, perPage }) {
      const start = (currentPage - 1) * perPage;
      const event = state.event.slice(start, start + 3);
      commit("SET_DISPLAY_EVENT", event);
    }
  },
  getters: {
    event(state) {
      return state.event;
    },
    rows(state) {
      return state.rows;
    },
    displayEvent(state) {
      return state.displayEvent;
    }
  },
  modules: {}
});
