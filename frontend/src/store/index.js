import { createStore } from 'vuex'
import axios from "axios"
import sweet from 'sweet-alert'
import router from '@/router'
import AuthenticateUser from '@/services/AuthenticateUser.js'
const ZhenUrl = "https://zhen.onrender.com/"
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    spinner: null,
    token: null,
    msg:null

  },
  getters: {
  },
  mutations: {
    setUsers(state,users){
      state.users = users;
    },
    setUser(state,user){
      state.user = user
    },
    addUser(state,users){
      state.users = users
    },
    setProducts(state,products){
      state.products = products
    },
    setProduct(state,product){
      state.product = product
    },
    setDeleteProducts(state,products){
      state.products = products
    },
    setSpinner(state,value){
      state.spinner = value
    },
    setMsg(state,msg){
      state.msg = msg
    }
  },
  actions: {
    async fetchUsers(context){
      try{
        const { data } = await axios.get(`${ZhenUrl}Users`);
        context.commit("setUser",data.results);
      }catch(e){
        context.commit("setMsg","An error has occured")
      }
    },
    async fetchProducts(context){
    try{
      const { data } = await axios.get(`${ZhenUrl}products`);
      context.commit("setProducts",data.results); 
    }catch(e){
      context.commit("setMsg","an error has occured")
    }
    },
    async register(context, payload) {
      try {
        const { msg } = (await axios.post(`${ZhenUrl}register`, payload))
          .data;
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
    async deleteProducts(comtext, prodID){
      try{
        const response = await axios.delete(`${ZhenUrl}products/${prodID}`)
        context.commit("setDeleteProducts",response)
        // location.reload()
      }catch(e){
        context.commit("setMsg","An error occured")
      }
    },
    // Make a register function (action) 
    async login(context, payload) {
      try {
        const { msg, token, results } = (
          await axios.post(`${ZhenUrl}login`, payload)
        ).data;
        if (results) {
          context.commit("setUser", { results, msg });
          cookies.set("GrantedUserAccess", { token, msg, results });
          authUser.applyToken(token);
          sweet({
            title: msg,
            text: `Welcome Back, ${results?.firstName}
              ${results?.lastName}`,
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
      } catch(e){
        context.commit(console.log(e));
      }
    },
    async logout(context) {
      context.commit("setUser")
      cookies.remove("GrantedUserAccess")
      router.push({ name: "login" })
    },
    async fetchUser(context, userID) {
      try {
        const { results } = (await axios.get(`${ZhenUrl}user/${userID}`))
          .data;
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
  modules: {
  }
})
