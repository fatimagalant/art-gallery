import { createStore } from "vuex";

export default createStore({
  state: {
    pieces: null,
    piece: null,
    users: null,
  },
  getters: {},
  mutations: {
    setPieces: (state, pieces) => {
      state.pieces = pieces;
    },
    setPiece: (state, piece) => {
      state.piece = piece;
    },
    setUser: (state, user) => {
      state.user = user;
    },
  },
  actions: {
    login: async (context, payload) => {
      const { email, password } = payload;

      const response = await fetch(
        `http://localhost:3000/users?email=${email}&password=${password}`
      );
      const userData = await response.json();
      context.commit("setUser", userData[0]);
    },
    register: async (context, payload) => {
      const { fullName, email, password } = payload;

      fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify({
          fullName: fullName,
          email: email,
          password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log("setUser", json));
    },
    getAllArt: async (context) => {
      fetch("http://localhost:3000/pieces")
        .then((res) => res.json())
        .then((pieces) => context.commit("setPieces", pieces));
    },
    getSinglePiece: async (context) => {
      fetch("http://localhost:3000/pieces" + id)
        .then((res) => res.json())
        .then((pieces) => context.commit("setPieces", pieces));
    },
    createPieces: async (context, piece) => {
      fetch("http://localhost:3000/pieces", {
        method: "POST",
        body: JSON.stringify(piece),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => context.dispatch("getAllArt"));
    },
    updatePieces: async (context, piece) => {
      fetch("http://localhost:3000/pieces" + piece.id, {
        method: "PUT",
        body: JSON.stringify(piece),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => context.dispatch("getAllArt"));
    },
    deletePiece: async (context, id) => {
      fetch("http://localhost:3000/pieces" + id, {
        method: "DELETE",
      }).then(() => context.dispatch("getAllArt"));
    },
  },

  modules: {},
});
