<template>
    <div>
        <h2>Products</h2>
        <div id="style_table" class="container-products">
            <table class="table" style="background-color: #eac7a1; color: #553a1d; border: 3px solid #D09869;" id="table" >
              <thead class="head">
                <tr>
                  <th id="id">ID</th>
                  <th id="name">Name</th>
                  <th id="price">Price (ZAR)</th>
                  <th id="img-head">Image</th>
                  <th id="amount">Quantity</th>
                  <th id="Category">Category</th>
                  <th id="del">Delete</th>
                  <th id="edit">Update</th>
                </tr>
              </thead>
              <tbody id="product-table" v-if="products">
                <tr v-for="product in products" :key="product.prodID">
                  <td id="id">{{ product.prodID }}</td>
                  <td id="name">{{ product.prodName }}</td>
                  <td id="price">{{ product.amount }}</td>
                  <td id="prodImg">
                    <img
                      :src="product.prodUrl"
                      :alt="product.prodName"
                      style="width: 13rem"
                    />
                  </td>
                  <td id="amount">{{ product.quantity }}</td>
                  <td id="Category">{{ product.Category }}</td>
                  <td id="del">
                    <button class="del">
                      delete
                    </button>
                  </td>
    
                  <td id="edit">
                    <button class="edit">edit</button>
                  </td>
                </tr >
              </tbody>
              <div v-else class="row">
                <SpinnerComp/>
              </div>
            </table>
          </div>


          <h2>Users</h2>
          <div  id="style-table" class="container-user">
            <table style="background-color: #eac7a1; color: #553a1d; border: 3px solid #D09869;" id="table">
                <thead class="head-user">
                    <tr>
                        <th id="id">ID</th>
                        <th id="Name">NAME</th>
                        <th id="lastName">SURNAME</th>
                        <th id="userAge">AGE</th>
                        <th id="userRole">ROLE</th>
                        <th id="Email">EMAIL</th>
                        <th id="img">PROFILE-IMG</th>
                        <th id="edit">EDIT</th>
                        <th id="del">DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.userID">
                        <td id="id">{{ users.userID }}</td>
                        <td id="Name">{{ user.firstName }}</td>
                        <td id="lastName"> {{ user.lastName }}</td>
                        <td id="userAge"> {{ user.userAge }}</td>
                        <td id="userRole"> {{ user.userRole }}</td>
                        <td id="Email">{{ user.emailAdd }}</td>
                        <td id="img"><img :src="user.userProfile" :alt="user.userRole" style="width:11rem"></td>
                        <td><button class="edit">EDIT</button></td>
                        <td><button class="del">DELETE</button></td>
                    </tr>
                </tbody>
            </table>

          </div>
    </div>
</template>

<script>

import SpinnerComp from '@/components/SpinnerComp.vue';

    export default {
        computed:{
            products(){
                return this.$store.state.products;
            },
            users(){
                console.log(this.$store.users);
                return this.$store.state.users;
            }
        },
        mounted(){
            this.$store.dispatch('fetchProducts');
            this.$store.dispatch('fetchUsers');
        },
        data(){
            return{
                product:[],
            }
        },

        components:{
            SpinnerComp
        }
        
    }
</script>

<style scoped>
.table{
    margin-top: 5rem;
}
</style>