<template>
    <div>
        <div class="container">
            <div class="row ">
        <div v-for="product in products" :key="product.prodID" class="productDisplay col-12 col-sm-4 col-md-4 p-3">
            <div class="card col-12 col-sm-4 col-md-4 p-3 " style="width: 20rem;">
                <img :src="product.prodUrl" class="card-img-top" :alt="product.prodName">
                <div class="card-body">
                  <h5 class="card-title">{{ product.prodName }}</h5>
                  <p class="card-text">{{ product.Category }}</p>
                  <p class="card-price">R{{ product.amount }}</p>
                  <p class="card-quantity">Quantity: {{ product.quantity }}</p>
                  <router-link :to="{ name:'product',params:{ prodID: product.prodID} }">
                    <button class="btn-outline-light" >
                        View More
                    </button>
                  </router-link>
                </div>
              </div>         
        </div>
    </div>
</div>
</div>
</template>

<script>
    export default {
        computed:{
            products(){
                return this.$store.state.products;
            }
        },
        mounted(){
            this.$store.dispatch('fetchProducts')
        }
    }
</script>

<style scoped>



</style>