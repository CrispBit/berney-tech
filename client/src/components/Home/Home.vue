<template>
    <div>
        <h1>Welcome to berney.tech</h1>
        <p>This is a website.</p>
        <div>
            <router-link class="fix-block" to="#">
                <h1>one-time fix</h1>
            </router-link>
            <router-link class="fix-block" to="#">
                <h1>retainer fix</h1>
            </router-link>
        </div>
        <footer style="margin: 20px;">
            <div>
                <router-link to="/about">About</router-link>
                <router-link to="/contact">Contact Me</router-link>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Home',
};
</script>

<style>
.fix-block {
    display: inline-block;
    border: 1px solid #000;
    width: 200px;
    height: 200px;
    text-decoration: none;
    text-align: center;
    line-height: 140px;
}
</style>
