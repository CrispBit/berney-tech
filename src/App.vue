<template>
    <div id="app">
        <Navigation class="row" />
        <div class="wrapper row">
            <router-view/>
        </div>
        <div class="row">
            <footer>
                <div v-if="loggedIn">
                    <span>Subscription: "{{ user.subscription }}"</span>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
import Navigation from './components/Navigation/Navigation';
export default {
    name: 'App',
    components: {
        Navigation,
    },
    beforeCreate () {
        this.$store.dispatch('registerUser');
    },
    computed: {
        loggedIn () {
            return this.$store.state.loggedIn;
        },
        user () {
            return this.$store.state.user;
        },
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Oswald|PT+Serif');
html, body, #app {
    height: 100%;
    margin: 0;
}
#app {
    width: 100%;
    height: 100%;
    display: table;
}
body {
    background-color: #09f;
}
#app div {
    font-family: 'PT Serif', serif;
}
#app.h1, #app.h2, #app.h3, #app.h4 {
    font-family: 'Oswald', sans-serif;
}
.page {
    margin: 5px;
}
footer {
    padding: 10px;
    background-color: black;
    color: white;
}
.row.wrapper {
    height: auto;
}
.row {
    display: table-row;
    height: 1px;
}
</style>
