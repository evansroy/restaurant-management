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
    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
    }
}
</script>