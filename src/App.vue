<template>
    <div id="app">
        <Navigation />
        <router-view/>
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
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Oswald|PT+Serif');
#app {
    font-family: 'PT Serif', serif;
}
#app.h1, #app.h2, #app.h3, #app.h4 {
    font-family: 'Oswald', sans-serif;
}
</style>
