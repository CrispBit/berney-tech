<template>
    <div class="page">
        <h1>Users</h1>
        <ul>
            <li v-for="user in adminData.users" :key="user._id">
                {{ user.firstName + " " + user.lastName }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Users',
    computed: {
        adminData () {
            return this.$store.state.adminData;
        },
    },
    beforeCreate () {
        this.$store.dispatch('registerUsers');
    },
};
</script>
