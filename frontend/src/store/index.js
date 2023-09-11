import { createStore } from 'vuex'
import axios from "axios"
import sweet from 'sweetalert';
import {useCookies} from 'vue3-cookies'
const {cookies} = useCookies()
import router from '@/router'
import authenticateUser from '@/services/authenticateUser'



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
    registerUser(state,user){
      state.user = user
    },
    setProducts(state,products){
      state.products = products
    },
    setProduct(state,product){
      state.product = product
    },
    setSpinner(state,value){
      state.spinner = value
    },
    setMsg(state,msg){
      state.msg = msg
    },
    setToken(state,token){
      state.token = token
    }
  },
  actions: {
    // login
    async logIn(context, payload) {
      try {
        const { msg, token, results } = (await axios.post(`${ZhenUrl}login`, payload)).data
      if(results) {
        context.commit("setUser", {results, msg});
        cookies.set("LegitUser", {token, msg, results})
        authenticateUser.applyToken(token)
        sweet({
          title: "success",
          text: `success`,
          timer: 2500,
          buttons: false,
        })
        router.push({name: 'home'})
      } else {
        sweet({
          title: "Error",
          text: msg,
          icon: "error",
          timer: 2000
        })
      }
    } catch (e) {
      context.commit("setMsg", "An error has occurred")
    }
  },
    async fetchUsers(context){
      try{
        const { data } = await axios.get(`${ZhenUrl}users`);
        context.commit("setUsers",data.results);
      }catch(e){
        context.commit("setMsg","An error has occured")
      }
    },
    async fetchUser(context){
      try{
        const { data } = (await axios.get(`${ZhenUrl}user`)).data
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
      context.commit("setMsg","An error has occured")
    }
    },
    async registerUser(context){
      try{
        const { data } = await axios.post(`${ZhenUrl}user`);
        context.commit("registerUser",data.results);
      }catch(e){
        context.commit("setMsg","An error has an occured")
      }
    }
  },
  modules: {
  }
})
