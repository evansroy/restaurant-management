<template>
    <Header/>
    <h1>Hello {{name}}, Welcome on Home Page</h1>
    <table border=".5">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Contacts</th>
            <th>Address</th>
        </tr>
        <tr v-for="item in restaurant" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.contacts }}</td>
            <td>{{ item.address }}</td>
        </tr>
    </table>
</template>
<script>
    import Header from './Header.vue'
    import axios from 'axios';
    export default {
        name:'HomePage',
        data(){
            return {
                name:'',
                restaurant:[],
            }
        },
        components:{
            Header
        },
       async mounted()
            {
                let user = localStorage.getItem('user-info');
                this.name = JSON.parse(user).name;
                if(!user)
                {
                    this.$router.push({name:'SignUp'})
                }

                let result = await axios.get("http://localhost:3000/restaurant");
                console.log(result);
                this.restaurant = result.data;
            }
    }
</script>
<style>
    td{
        width: 160px;
        height: 40px;
    }
</style>