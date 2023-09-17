<template>
    <Header />
    <h1>Hello User, Welcome on Update View Page</h1>
    <form action="" class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name" />
        <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address" />
        <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact" />
        <button type="button" @click="addRestaurant">Update Restaurant</button>
    </form>
</template>
<script>
import Header from './Header.vue'
import axios from 'axios';
export default {
    name: 'UpdateView',
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
   async mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }

        const result = await axios.get('http://localhost:3000/restaurant/'+ this.$route.params.id)
        // console.warn(this.$route.params.id);
        console.warn(result.data);
        this.restaurant=result.data
    }
}
</script>