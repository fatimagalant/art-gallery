import { createStore } from "vuex";

export default createStore({
  state: {
    pieces: null,
    piece: null,
    user: null,
    asc: true,
  },
  getters: {},
  mutations: {
    setPieces: (state, pieces) => {
      state.pieces = pieces;
    },
    setPiece: (state, piece) => {
      console.log(piece);
      state.piece = piece;
    },
    setUser: (state, user) => {
      console.log(user);
      state.user = user;
    },
    sortByPrice: (state) => {
      state.pieces = state.pieces.sort((a, b) => {
        return a.price - b.price;
      });
      if (!state.asc) {
        state.pieces.reverse();
      }
      state.asc = !state.asc;
    },
    sortById: (state) => {
      state.pieces = state.pieces.sort((a, b) => {
        return a.id - b.id;
      });
      if (!state.asc) {
        state.pieces.reverse();
      }
      state.asc = !state.asc;
    },
    sortByTitle: (state) => {
      state.pieces = state.pieces.sort((a, b) => {
        return a.artName === b.artName ? 0 : a.artName < b.artName ? -1 : 1;
      });
      if (!state.asc) {
        state.pieces.reverse();
      }
      state.asc = !state.asc;
    },
    sortByCategory: (state) => {
      state.pieces = state.pieces.sort((a, b) => {
        return a.category === b.category ? 0 : a.category < b.category ? -1 : 1;
      });
      if (!state.asc) {
        state.pieces.reverse();
      }
      state.asc = !state.asc;
    },
    sortByDescription: (state) => {
      state.pieces = state.pieces.sort((a, b) => {
        return a.description === b.description
          ? 0
          : a.description < b.description
          ? -1
          : 1;
      });
      if (!state.asc) {
        state.pieces.reverse();
      }
      state.asc = !state.asc;
    },
    sortByArtist: (state) => {
      state.pieces = state.pieces.sort((a, b) => {
        return a.artistName === b.artistName
          ? 0
          : a.artistName < b.artistName
          ? -1
          : 1;
      });
      if (!state.asc) {
        state.pieces.reverse();
      }
      state.asc = !state.asc;
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
    getCategory: async (context, category) => {
      await fetch(`http://localhost:3000/pieces?category=${category}`)
        .then((response) => response.json())
        .then((pieces) => context.commit("setPieces", pieces));
    },
    register: async (context, payload) => {
      const { fullName, email, password, role } = payload;

      fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify({
          fullName: fullName,
          email: email,
          password: password,
          role: role,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json));
    },
    getAllArt: async (context) => {
      fetch("http://localhost:3000/pieces")
        .then((res) => res.json())
        .then((pieces) => context.commit("setPieces", pieces));
    },
    getSinglePiece: async (context, id) => {
      fetch(" http://localhost:3000/pieces/" + id)
        .then((res) => res.json())
        .then((piece) => context.commit("setPiece", piece));
    },
    createPieces: async (context, payload) => {
      const { artistName, artName, price, imgURL, description, category } =
        payload;
      fetch("http://localhost:3000/pieces", {
        method: "POST",
        body: JSON.stringify({
          artistName: artistName,
          artName: artName,
          price: price,
          imgURL: imgURL,
          description: description,
          category: category,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => context.dispatch("getAllArt"));
    },
    updateProduct: async (context, piece) => {
      const { id, artistName, artName, price, imgURL, description, category } =
        piece;
      fetch("http://localhost:3000/pieces/" + id, {
        method: "PUT",
        body: JSON.stringify({
          artistName: artistName,
          artName: artName,
          price: price,
          imgURL: imgURL,
          description: description,
          category: category,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => context.dispatch("getAllArt"));
    },
    deletePiece: async (context, id) => {
      fetch("http://localhost:3000/pieces/" + id, {
        method: "DELETE",
      }).then(() => context.dispatch("getAllArt"));
    },
  },

  modules: {},
});
