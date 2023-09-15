<template>
    <div>
    
        <b-modal v-model="showModal" title="Edit Product">
            <form @submit.prevent="updateProduct">
              <div class="form-group">
                <label for="productName">Product Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="productName"
                  v-model="EditProduct.prodName"
                />
              </div>
              <div class="form-group">
                <label for="productQuantity">Quantity</label>
                <input
                  type="number"
                  class="form-control"
                  id="productQuantity"
                  v-model="EditProduct.quantity"
                />
              </div>
              <div class="form-group">
                <label for="productPrice">Price</label>
                <input
                  type="number"
                  class="form-control"
                  id="productPrice"
                  v-model="EditProduct.price"
                />
              </div>
              <!-- Add more fields as needed -->
        
              <button type="submit" class="btn btn-primary">Save Changes</button>
            </form>
          </b-modal>
             
    </div>
</template>

<script>
    export default {
        props:{
            product: Object,
            showModel: Boolean,
        },
        data(){
            return{
                EditProduct:{},
            }
        },
        toy:{
             product:{
                handler(newVal){
                    this.EditProduct = {...newVal};
                }
            }, 
            immediate: true,
        },
        methods:{
            updateProduct(){
                this.$emit("update", this.EditProduct)
            }
        }
        
    }
</script>

<style scoped>

</style>