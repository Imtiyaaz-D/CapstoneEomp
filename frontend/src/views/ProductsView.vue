<template>
    <div>
        <CardComp />
    </div>
</template>

<script>
import CardComp from '@/components/CardComp.vue';
    export default {
        components:{
            CardComp
        },
    }
    //     computed:{
    //         product(){
    //             return this.$store.state.product;
    //         }
    //     },
    //     mounted(){

    //         this.$store.dispatch('fetchProduct',this.$route.params.prodID)
    //         // console.log('Product Data:', this.product);
    //     }
    // }
</script>

<style scoped>

</style>