<template>
    <div>
      <img class="logo" alt="logo" src="../assets/logo.png">
      <h1>Log In</h1>
      <div class="login">
        <input type="email" v-model="email" placeholder="Enter Email"/>
        <input type="password" v-model="password" placeholder="Enter Password"/>
        <button @click="logIn">Log In</button>
        <p>
          <router-link to="/sign-up">Sign Up</router-link>
        </p>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'LogIn',
    data(){
        return {
            email:'',
            password:''
        }
    },
    methods:{
        async logIn()
        {
            let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`)
            if(result.status==200 && result.data.length>0){
              localStorage.setItem("user-info",JSON.stringify(result.data[0]))
              this.$router.push({name:'Home'})
            }
            console.log(result);
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