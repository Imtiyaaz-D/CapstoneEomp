<template>
    <div>
      <form>
        <div class="mb-3 p-5">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="payload.emailAdd"
            required
          />
        </div>
        <div class="mb-3 p-5">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            v-model="payload.userPass"
            required
          />
        </div>
        <button @click.prevent="logIn" type="button" class="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  </template>

<script>
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()



    export default {
        data() {
            return {
                payload: {
                    emailAdd: "",
                    userPass: ""
                }
            }
        },
        computed: {
            user() {
                return this.$store.state.user
            }
        },
        methods: {
            logIn() {
                this.$store.dispatch("logIn", this.payload)
            }
        },
        beforeCreate() {
            this.$store.dispatch('fetchUsers')
        },
        mounted() {
            console.log(cookies.get('LegitUser'));
        },
    }
</script>

<style scoped>
body{
    background-color: #F6F0ED;
}
.register{
    padding: 10rem;

}
</style>