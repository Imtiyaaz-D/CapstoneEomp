<template>
    <div >
        <nav class="navbar fixed-top">
            <div class="container-fluid">
              <a class="navbar-brand" href="/">Zhen</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><img src="https://i.postimg.cc/ZKFVXkGQ/logo-Zhen-sm.jpg" alt="logo" loading="lazy"></h5>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                      <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/admin">Admin</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" to="/products">Products</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" to="/contact">Contact Us</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" to="/login">Login</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" to="/register">Register</router-link>
                      </li>
                      <!-- <li class="nav-item" data-bs-dismiss="offcanvas">
                        <router-link class="nav-link" to="/login"
                           @click="logout">Log Out</router-link
                        >
                      </li> -->
                  </ul>
                </div>
              </div>
            </div>
          </nav>
    </div>
</template>

<script>
import {useCookies} from 'vue3-cookies'
const {cookies} = useCookies()
    export default {
       computed:{
        user(){
          return this.$store.user ||
          cookies.get('GrantedUser')
        },
        results(){
          return this.user?.results;
        }
       },
       methods:{
        logout(){
          this.$store.dispatch('logout')
        }
       }
    }
</script>

<style scoped>
.navbar .offcanvas{
  background-color: #BBB193;
}
.navbar{
  background-color: #BBB193;
}
</style>