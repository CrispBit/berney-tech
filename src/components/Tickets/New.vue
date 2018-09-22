<template>
    <div class="page">
        <h1>New Ticket</h1>
        <div v-if="step==1">
            <h2>Repair or Service?</h2>
            <div class="choice-block" v-on:click="appendCategory('Repair')">
                <p>Repair</p>
            </div>
            <div class="choice-block" v-on:click="appendCategory('Service')">
                <p>Service</p>
            </div>
        </div>
        <div v-if="step==2">
            <div v-if="lastCategory == 'Repair'">
                <h2>What kind of Repair?</h2>
                <div class="choice-block" v-on:click="appendCategory('Fix Hopes and Dreams')">
                    <p>Fix my Hopes and Dreams</p>
                </div>
            </div>
            <div v-if="lastCategory == 'Service'">
                <h2>What kind of Service? OwO</h2>
                <div class="choice-block" v-on:click="appendCategory('Give Hopes and Dreams')">
                    <p>Give me some Hopes and Dreams</p>
                </div>
            </div>
        </div>
        <div v-if="step==3">
            <h2>All done, brother. Now we can continue the enlightenment</h2>
            <h3>Your ticket: {{ categories.join(" > ") }}</h3>
            <div class="choice-block" v-on:click="submitTicket()">
                <p>Submit Ticket</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewTicket',
    data () {
        return {
            step: 1,
            lastCategory: String,
            categories: [],
            ROOT_API: process.env.ROOT_API,
        };
    },
    methods: {
        appendCategory (categoryString) {
            this.$data.lastCategory = categoryString;
            this.$data.categories.push(categoryString);
            this.$data.step++;
        },
        submitTicket () {
            fetch(this.$data.ROOT_API + '/auth/ticket/new', {
                method: 'POST',
                body: JSON.stringify({
                    categories: this.$data.categories,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            }).then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw response;
                }
            }).then((response) => {
                this.$router.push({ name: 'view-ticket', params: { ticketId: response._id } });
            }).catch((err) => {
                console.error(err);
            });
        },
    },
};
</script>

<style scoped>
.choice-block {
    display: inline-flex;
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
    cursor: pointer;
}

.choice-block p {
    font-size: 2em;
}
</style>
