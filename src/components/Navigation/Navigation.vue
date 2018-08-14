<template>
<div>
    <div>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <div v-if="loggedIn" style="float: right">
            <span>{{ user.firstName }}</span>
            <input type="button" value="logout" v-on:click="logout()" />
        </div>
        <div v-else style="float: right">
            <router-link to="/login">Sign In</router-link>
            <router-link to="/signup">Sign Up</router-link>
        </div>
    </nav>
</div>
</div>
</template>

<script>
export default {
    name: 'Navigation',
    computed: {
        loggedIn () {
            return this.$store.state.loggedIn;
        },
        user () {
            return this.$store.state.user;
        },
    },
    methods: {
        logout () {
            fetch(
                process.env.ROOT_API + '/auth/logout', {
                    method: 'POST',
                    body: {},
                    credentials: 'include',
                }
            ).then(() => {
                this.$router.push('/');
                this.$store.dispatch('registerUser');
            }).catch((err) => {
                console.error(err);
                this.$router.push('/');
                this.$store.dispatch('registerUser');
            });
        },
    },
};
</script>
