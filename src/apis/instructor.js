import axios from "axios";
export const Instructor = {
  namespaced: true,
  state: {
    instructor: null,
    isLoggedIn: null,
    token: localStorage.getItem("token"),
    status: ""
  },
  mutations: {
    setAuth(state, data) {
      state.instructor = data.instructor;
      state.token = data.token;
      localStorage.setItem("token", data.token);
      axios.defaults.headers.common["Authorization"] = data.token;
    },
    auth_request(state) {
      state.status = "pending";
    },
    auth_error(state) {
      state.status = "failed";
      localStorage.removeItem("token");
    }
  },
  getters: {},
  actions: {
    login({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios
          .post("http://oes.test/api/instructor/login", credentials)
          .then(resp => {
            commit("setAuth", resp.data);
            resolve(resp);
          })
          .catch(err => {
            commit("auth_error");
            reject(err);
          });
      });
    }
  }
};
