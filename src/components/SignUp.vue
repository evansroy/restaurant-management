
<template>
    <div>
      <img class="logo" alt="logo" src="../assets/logo.png">
      <h1>Sign Up</h1>
      <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name"/>
        <input type="email" v-model="email" placeholder="Enter Email"/>
        <input type="password" v-model="password" placeholder="Enter Password"/>
        <button @click="signUp">Sign Up</button>
        <p>
          <router-link to="/log-in">Log In</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'SignUp',
    data() {
      return {
        name: '',
        email: '',
        password: ''
      }
    },
    methods: {
      async signUp() {
        try {
          let result = await axios.post("http://localhost:3000/user", {
            name: this.name,
            email: this.email,
            password: this.password
          });
  
          console.log(result);
  
          if (result.status === 201) {
            localStorage.setItem("user-info", JSON.stringify(result.data));
            this.$router.push({ name: 'Home' });
          }
        } catch (error) {
          console.error(error); // Handle the error appropriately (e.g., show an error message to the user)
        }
      }
    },
    computed: {
      isLoggedIn() {
        return !!localStorage.getItem('user-info');
      }
    },
    mounted() {
      if (this.isLoggedIn) {
        this.$router.push({ name: 'Home' });
      }
    }
  }
  </script>

<style>

</style>