import { createStore } from "vuex";
import axios from "axios";
import sweet from "sweet-alert";
import router from "@/router";
import authUser from '@/services/AuthenticateUser.js'
const ZhenUrl = "https://zhenv-2.onrender.com/";
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    spinner: null,
    token: null,
    msg: null,
  },
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    addUser(state, users) {
      state.users = users;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setDeleteProducts(state, products) {
      state.products = products;
    },
    setSpinner(state, value) {
      state.spinner = value;
    },
    setMsg(state, msg) {
      state.msg = msg;
    },
  },
  actions: {
    async fetchUsers(context) {
      try {
        const { data } = await axios.get(`${ZhenUrl}Users`);
        context.commit("setUser", data.results);
      } catch (e) {
        context.commit("setMsg", "An error has occured");
      }
    },
    async fetchProducts(context) {
      try {
        const { data } = await axios.get(`${ZhenUrl}products`);
        context.commit("setProducts", data.results);
      } catch (e) {
        context.commit("setMsg", "an error has occured");
      }
    },
    async EditProduct(context, edit) {
      try {
        const {data} = await axios.patch(
          `${ZhenUrl}products/${edit.prodID}`,
          edit
        );
        context.commit("setProduct", data.results);
        console.log("Product has been updated", data.results);
      } catch (error) {
        console.log("Errorin updating your product", e);
      }
    },
    async register(context, payload) {
      try {
        const { msg } = (await axios.post(`${ZhenUrl}register`, payload)).data;
        if (msg) {
          sweet({
            title: "Registration",
            text: msg,
            icon: "success",
            timer: 3000,
          });
          context.dispatch("fetchUsers");
          cookies.set("GrantedAccess", { token, msg, result });
          router.push({ name: "home" });
        } else {
          sweet({
            title: "Error",
            text: "Oops, an error occured",
            icon: "error",
            timer: 3000,
          });
        }
      } catch (e) {
        context.commit(console.log(e));
      }
    },
    async deleteProducts(context, prodID) {
      try {
        const response = await axios.delete(`${ZhenUrl}products/${prodID}`);
        context.commit("setDeleteProducts", response);
        // location.reload()
      } catch (e) {
        context.commit("setMsg", "An error occured");
      }
    },
  //  login
    async login(context, payload) {
      try {
        const { msg, token, result } = (
          await axios.post(`${ZhenUrl}login`, payload)
        ).data;
        if (result) {
          context.commit("setUser", { result, msg });
          localStorage.setItem("user", JSON.stringify(result));
          cookies.set("GrantedUserAccess", { token, msg, result });
          console.log(result);
          authUser.applyToken(token);
          sweet({
            title: msg,
            text: `Welcome Back, ${result?.firstName}
              ${result?.lastName}`,
            icon: "success",
            timer: 3000,
          });
          router.push({ name: "home" });
        } else {
          sweet({
            title: "Error",
            text: "Oops, an error occured",
            icon: "error",
            timer: 3000,
          });
        }
      } catch (e) {
        context.commit(console.log(e));
      }
    },
    async logout(context) {
      context.commit("setUser");
      cookies.remove("GrantedUserAccess");
      router.push({ name: "login" });
    },
    async fetchUser(context, userID) {
      try {
        const { results } = (await axios.get(`${ZhenUrl}user/${userID}`)).data;
        context.commit("setUser", results);
      } catch (e) {
        sweet({
          title: "Error",
          text: "Oops, an error occured",
          icon: "error",
          timer: 3000,
        });
      }
    },

  },
  modules: {},
});
