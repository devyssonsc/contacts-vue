  import { defineStore } from "pinia";

  interface User {
    id: number;
    name: string;
    email: string;
  }

  interface AuthState {
    user: User | null;
    token: string | null;
  }

  export const useAuthStore = defineStore("auth", {
    state: (): AuthState => ({
      user: JSON.parse(localStorage.getItem("user") || "null"),
      token: localStorage.getItem("token")
    }),
    getters: {
        isAuthenticated: (state) => !!state.token,
        getUser: (state) => state.user
      },
    actions: {
      login(user: User, token: string) {
        this.user = user;
        this.token = token;

        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)
      },
      logout() {
        this.user = null;
        this.token = null;

        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }
    }
  })
