<template>
    <Header/>
    <h1>Hello User, Welcome on Add Resaurant Page</h1>
</template>
<script>
    import Header from './Header.vue'
    export default {
        name:'AddView',
        components:{
            Header
        },
        mounted()
            {
                let user = localStorage.getItem('user-info');
                if(!user)
                {
                    this.$router.push({name:'SignUp'})
                }
            }
    }
</script>