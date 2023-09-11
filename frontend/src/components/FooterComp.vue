<template>
    <div>
        <footer class="bot">
            <p>ZHEN  &copy;copyright {{ cYear }}</p>
            <p>Built by Imtiyaaz Damon</p>
        </footer>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                cYear: new Date().getUTCFullYear(),
            }
        }
        
    }
</script>

<style scoped>
.bot{
    background-color:#BBB193;
    width:100%;
    margin-top:0;
}

</style>