const TOKEN_KEY = 'jwt-token'
import axios from "axios"
import {error} from "../../utils/error"

export default {
    namespaced: true,
    state() {
        return {
            token: localStorage.getItem(TOKEN_KEY)
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token
            localStorage.setItem(TOKEN_KEY, token)
        },
        logout(state) {
            state.token = null
            localStorage.removeItem(TOKEN_KEY)
        }
    },
    actions: {
        async login({ commit }, payload) {
            try {
                const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${import.meta.env.VITE_FB_KEY}`
                const { data } = await axios.post(url, {...payload, returnSecureToken: true})
                commit('setToken', data.idToken)
            } catch (e) {
                console.log(error(e.response.data.error.message));
                console.log(e);
                
            }




           

        }
    },
    getters: {
        token(state) {
            return state.token
        },
        isAuthenticated(_, getters) {
            return !!getters.token
        }
    }
}