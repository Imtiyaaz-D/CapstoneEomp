<template>
    <div>
      <h2>Admin</h2>
    <div>
      <div id="style_table" class="container">
        <h2>Products</h2>
        <table class="table" style="background-color: #eac7a1; color: #553a1d; border: 3px solid #D09869;" id="table">
          <thead class="head">
            <tr>
              <th id="id">ID</th>
              <th id="name">Name</th>
              <th id="price">Price (ZAR)</th>
              <th id="img-head">Image</th>
              <th id="Category">Category</th>
              <th id="amount">Quantity</th>
              <th id="del">Delete</th>
              <th id="edit">Edit</th>
            </tr>
          </thead>
          <tbody id="product-table">
            <tr v-for="product in products" :key="product.prodID">
              <td id="id">{{ product.prodID }}</td>
              <td id="name">{{ product.prodName }}</td>
              <td id="price">{{ product.amount }}</td>
              <td id="prodImg">
                <img
                  :src="product.prodUrl"
                  :alt="products.prodName"
                  style="width: 13.5rem"
                />
              </td>
              <td id="Catgory"> {{ product.Category }}</td>
              <td id="amount">{{ product.quantity }}</td>

              <td id="del">
                <button class="del" @click="deleteProducts(product.prodID)">
                  delete
                </button>
              </td>

              <td id="edit">
                <button class="edit"><router-link :to="`/edit-product/${product.prodID}`"></router-link>Edit </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


    <div>
      <div id="style_table" class="container">
        <h2>User</h2>
        <table class="table" style="background-color: #eac7a1; color: #553a1d; border: 3px solid #D09869;" id="table">
          <thead class="head">
            <tr>
              <th id="id">ID</th>
              <th id="name">firstName</th>
              <th id="lastName">lastName</th>
              <th id="userAge">Age</th>
              <th id="gender">gender</th>
              <th id="userRole">Role</th>
              <th id="emailAdd">Email</th>
              <th id="del">Delete</th>
              <th id="edit">Edit</th>
            </tr>
          </thead>
          
          <tbody id="user-table" >
            
            <tr v-for="user in users" :key="user.userID" >
              <td id="id">{{ user.userID }}</td>
              <td id="name">{{ user.firstName }}</td>
              <td id="lastName">{{ user.lastName}}</td>
              <td id="Age">{{ user.userAge}} </td>
              <td id="sex">{{user.gender}}</td>
              <td id="Role">{{user.userRole}}</td>
              <td id="userImg">
                <img
                  :src="user.userProfile"
                  :alt="user.firstName"
                  style="width: 13.5rem"
                />
              </td>
              

              <td id="del">
                <button class="del" @click="deleteUser(user.userID)">
                  delete
                </button>
              </td>

              <td id="edit">
                <button class="edit"><editProductCompVue/></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
</template>

<script>

import editProductCompVue from '@/components/editProductComp.vue'
    export default {
      computed:{
        products(){
          return this.$store.state.products;
        },
        users(){
          return this.$store.state.user;
        }
      },
      mounted(){
        this.$store.dispatch("fetchProducts"),
        this.$store.dispatch("fetchUsers")
      },
      data(){
        return{
          product: [],
        }
      },
      methods:{
        deleteProducts(prodID){
          this.$store.dispatch('deleteProducts',prodID)
        },
      
      },
      components:{
        editProductCompVue
      }
        
    }
</script>

<style scoped>

</style>