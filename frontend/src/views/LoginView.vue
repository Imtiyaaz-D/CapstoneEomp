<template>
  <div class="container">
    <div class="row">
      <form class="form" @submit.prevent="login">
        <div class="form-control-wrapper">
          <span class="inline">
            <input
              type="email"
              class="form-control"
              placeholder="email"
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
              placeholder="password"
              minlength="4"
              maxlength="12"
              v-model="payload.userPass"
            />
          </span>
        </div>
        <div class="form-control-wrapper">
          <div class="col">
            <button type="submit" class="btn btn-success">
              Log In
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            </button>
          </div>
        </div>
        <div class="form-control-wrapper">
          <div class="row">
            <div class="col">
              <router-link
                class="d-flex justify-content-center text-decoration-none"
                to="/register"
                >Don't have an account ? Click here to register</router-link
              >
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      payload: {
        emailAdd: "",
        userPass: "",
      },
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.payload);
    },
  },
  beforeCreate() {
    this.$store.dispatch("fetchUsers");
  },
};
</script>
<style scoped></style>

<style scoped>
body {
  background-color: #f6f0ed;
}
.container {
  padding: 10rem;
}


</style>
