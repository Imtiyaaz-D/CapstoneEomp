<template>
    <div>
        
      <div class="container">
        <h2>Register</h2>
        <div class="row">
          <form class="form" @submit.prevent="register">
            <div class="form-control-wrapper">
              <span class="inline">
                <input
                  type="name"
                  class="form-control"
                  placeholder="First Name"
                  v-model="payload.firstName"
                  required
                />
              </span>
            </div>
            <div class="form-control-wrapper">
              <span class="inline">
                <input
                  type="surname"
                  class="form-control"
                  placeholder="Last Name"
                  v-model="payload.lastName"
                  required
                />
              </span>
            </div>
            <div class="form-control-wrapper">
              <span class="inline">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  v-model="payload.emailAdd"
                  required
                />
              </span>
            </div>
        
            <div class="form-control-wrapper">
              <span class="inline">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  minlength="4"
                  maxlength="12"
                  v-model="payload.userPass"
                />
              </span>
            </div>
            <div class="form-control-wrapper">
              <span class="inline">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Role"
                  v-model="payload.userRole"
                />
              </span>
            </div>
            <div class="form-control-wrapper">
              <span class="inline">
                <input
                  type="text"
                  class="form-control"
                  v-model="payload.userProfile"
                />
              </span>
            </div>
            <div class="form-control-wrapper">
              <div class="col">
                <button type="submit" class="btn btn-success">
                  Submit
                  <span
                    v-show="spinner"
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <!-- <div v-else class="row">
          <SpinnerComp/>
        </div> -->
      </div>
    </div>
  </template>
  <script>
  import { useCookies } from "vue3-cookies";
  const { cookies } = useCookies();
  // import SpinnerComp from "@/components/SpinnerComp.vue";
  export default {
    data() {
      return {
        payload: {
          firstName: "",
          lastName: "",
          emailAdd: "",
          userPass: "",
          userRole: "",
          userProfile: "https://i.postimg.cc/3rZ0H0D8/profile-Image.png",
        },
      };
    },
    computed: {
      user() {
        return this.$store.state.user;
        //  || JSON.parse( cookies.get('GrantedUserAccess'))
      },
    },
    methods: {
      register() {
        // this.firstName.payload,
        // this.lastName.payload,
        // this.emailAdd.payload,
        // this.userPass.payload,
        // this.userRole.payload,
        // this.userProfile,
        
        // Put this is a try after using this.param
        this.$store.dispatch("register", this.payload);
      },
    
    },
    // beforeCreate() {
    //   this.$store.dispatch('fetchUsers')
    // },
      mounted() {
      console.log(cookies.get("GrantedUserAccess"));
    },
    components:{
      // SpinnerComp
  }
  };
  </script>
  <style scoped>
  .container{
    padding: 10rem;
  }
  </style>