<template>
    <div>
        <br>
        <br>
        <div>
            <body>
                <div class="container" v-if="product">
                  <div class="left-side">
                    <img :src="product.prodUrl" class="left-side" alt="" style="height: 28rem; width:18rem" />
                  </div>
                  <div class="right-side">
                    <p id="perfume">Gadgets</p>
                    <h1 id="header">{{ product.prodName }}</h1>
                    <p id="description">A poetic expression, where the canvas breathes with its own life.Layers of texture create a tactile feast for the eyes, inviting closer inspection</p>
                    <div class="price">
                      <h1 id="number-discount">R{{ product.amount }}</h1>
                      <p id="number-full">$169.99</p>
                    </div>
                    <button class="cart-btn">
                      <p id="btn-text">Add to Cart</p>
                    </button>          
                  </div>
                </div>
                <div v-else>
                    <h1>Loading...</h1>
                </div>
            </body>
        </div>
        
    </div>
  </template>

<script>
    export default {
        computed: {
            product(){
                return this.$store.state.product;
            }
        },
        mounted(){
            this.store.dispatch('fetchProduct',this.$store.params.prodID)
        }
        
    }
</script>

<style scoped>

.container{
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 600px;
    height:450px;
    background-color: #F6F0ED;
    border-radius: 10px;
}
.left-column{
    background-image: url();
    background-size:cover;

}
</style>