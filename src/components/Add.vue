<template>
    <Header />
    <h1>Hello User, Welcome on Add Resaurant Page</h1>
    <form action="" class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name" />
        <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address" />
        <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact" />
        <button type="button" @click="addRestaurant">Add new Restaurant</button>
    </form>
</template>
<script>
import Header from './Header.vue'
import axios from 'axios';
export default {
    name: 'AddView',
    components: {
        Header
    },
    data() {
        return {
            restaurant: {
                name: "",
                address: "",
                contact: "",
            }

        }
    },
    methods: {
        async addRestaurant() {

            console.log(this.restaurant);
            const result = await axios.post("http://localhost:3000/restaurant",{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contacts:this.restaurant.contact,
            });
            if(result.status==201)
            {
                this.$router.push({name:'Home'})
            }
            console.log("result", result);
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
    }
}
</script>