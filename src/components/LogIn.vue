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
export default {
    name:'LogIn'
}
</script>