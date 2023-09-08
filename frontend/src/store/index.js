import { createStore } from 'vuex'
import axios from "axios"
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
    }
  },
  modules: {
  }
})
