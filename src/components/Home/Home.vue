<template>
    <div class="page">
        <div class="flex-block">
            <div class="choice-block">
                <router-link class="main-info-block" to="#">
                    <h1>Contact Me</h1>
                </router-link>
                <router-link class="main-info-block" to="#">
                    <h1>Pricing Information</h1>
                </router-link>
            </div>
            <div class="choice-block">
                <div class="flex-row">
                    <router-link class="fix-block" to="/tickets/new">
                        <h1>Create Help Ticket</h1>
                    </router-link>
                    <router-link class="fix-block" to="/tickets">
                        <h1>View Help Tickets</h1>
                    </router-link>
                </div>
                <div class="flex-row">
                    <router-link class="fix-block" to="#">
                        <h1>FAQ</h1>
                    </router-link>
                    <router-link class="fix-block" to="/about">
                        <h1>About</h1>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
};
</script>

<style scoped>
.choice-block {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    width: 100%;
}

.main-info-block {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-decoration: none;
    text-align: center;
    background-color: lightgray;
    margin: 10px;
    color: black;
    min-width: 300px;
    max-width: 400px;
}

.fix-block {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid orange;
    text-decoration: none;
    text-align: center;
    background-color: yellow;
    margin: 3px;
    color: black;
    width: 40vw;
    height: 40vw;
    min-width: 145px;
    max-width: 195px;
    min-height: 145px;
    max-height: 195px;
}

.flex-block {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
}

.flex-row {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
}
</style>
