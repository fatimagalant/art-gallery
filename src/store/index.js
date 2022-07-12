import { createStore } from "vuex";

export default createStore({
  state: {
    pieces: null,
    users: null,
  },
  getters: {},
  mutations: {
    setPieces(state, pieces) {
      state.pieces = pieces;
    },
    setUsers(state, users) {
      state.users = users;
    },
  },
  actions: {
    getAllArt: async (context) => {},
  },
  modules: {},
});
