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
    getAllArt: async (context) => {
      fetch("http://localhost:3000/pieces")
        .then((res) => res.json())
        .then((pieces) => context.commit("setPieces", pieces));
    },
    login: async(context, payload)=>{
      const (email, password)=payload,

      const response= await fetch{'http://localhost:3000/users'}

      }
    },
  },
  modules: {},
});
