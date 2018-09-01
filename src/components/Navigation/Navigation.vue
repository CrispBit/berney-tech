<template>
    <div>
        <nav>
            <router-link to="/">Berney Computers</router-link>
            <div v-if="loggedIn" style="float: right">
                <span>{{ user.firstName }}</span>
                <a href="#" v-on:click="logout()">Logout</a>
            </div>
            <div v-else style="float: right">
                <router-link to="/login">Sign In</router-link>
                <router-link to="/signup">Sign Up</router-link>
            </div>
        </nav>
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

<style>
    nav {
        padding: 10px;
        background-color: black;
        color: white;
    }
    nav a {
        text-decoration: none;
        color: white;
    }
</style>
