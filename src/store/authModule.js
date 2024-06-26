import axios from "axios";
const publicEnvVar = import.meta.env.VITE_APP_BACKEND_URL;

export const authModule = {
  state: () => ({
    user: null,
    token: sessionStorage.getItem('token') || null,
    isLoading: false,
    error: null,
  }),
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
    user(state) {
      return state.user;
    },
    fullName(state) {
      return state.user?.fullName;
    },
    token(state) {
      return state.token;
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
      if (token) {
        sessionStorage.setItem('token', token);
      } else {
        sessionStorage.removeItem('token');
      }
    },
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setError(state, error) {
      state.error = error;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      sessionStorage.removeItem('token');
    },
  },
  actions: {
    async login({ commit }, { email, password }) {
      commit('setLoading', true);
      commit('setError', null);
      try {
        const response = await axios.post(`${publicEnvVar}/auth/login`, { email, password });
        const userData = response.data;
        commit('setUser', userData);
        commit('setToken', userData.token);
      } catch (error) {
        commit('setError', error.response?.data?.message || error.message);
      } finally {
        commit('setLoading', false);
      }
    },
    async fetchUser({ commit, state }) {
      if (!state.token) return;
      try {
        const response = await axios.get(`${publicEnvVar}/auth/me`, {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        });
        commit('setUser', response.data);
      } catch (error) {
        commit('logout');
      }
    },
    async checkAuth({ commit }) {
      const token = sessionStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get(`${publicEnvVar}/auth/me`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          commit('setUser', response.data);
        } catch (error) {
          console.error('Failed to authenticate', error);
          sessionStorage.removeItem('token');
          commit('logout');
        }
      } else {
        commit('logout');
      }
    },
    logout({ commit }) {
      commit('logout');
    },
  },
  namespaced: true,
};
