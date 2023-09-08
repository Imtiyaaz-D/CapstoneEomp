<template>
    <div>
        <div v-for="product in products" :key="product.prodID" class="productDisplay">
            <div class="card" style="width: 18rem;">
                <img :src="product.prodUrl" class="card-img-top" :alt="product.prodName">
                <div class="card-body">
                  <h5 class="card-title">{{ product.prodName }}</h5>
                  <p class="card-text">{{ product.Category }}</p>
                  <p class="card-price">R{{ product.amount }}</p>
                  <p class="card-quantity">{{ product.quantity }}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
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