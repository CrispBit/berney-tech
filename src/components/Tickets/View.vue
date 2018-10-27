<template>
    <div class="page">
        <h2 v-if="!ticket">Loading...</h2>
        <div v-else>
            <h2>{{ ticket.categories.join(" > ") }}</h2>
            <div class="messages-container">
                <div class="message-block" v-for="message in ticket.messages" :key="message._id">
                    <h3>{{ message.author.firstName }} {{ message.author.lastName }}</h3>
                    <p>{{ message.body }}</p>
                </div>
            </div>
        </div>
        <form v-on:submit.prevent="postMessage">
            <div class="form-item">
                <textarea name="messageBody" placeholder="Message..." />
            </div>
            <div class="form-item">
                <input type="submit" value="Send" />
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ViewTicket',
    data () {
        return {
            ticket: null,
            ROOT_API: process.env.ROOT_API,
        };
    },
    watch: {
        ticket: 'fetchTicket',
    },
    methods: {
        fetchTicket () {
            fetch(process.env.ROOT_API + '/auth/ticket/view/' + this.$route.params.ticketId, { credentials: 'include' })
                .then((res) => {
                    return res.json();
                }).then((ticket) => {
                    this.ticket = ticket;
                }).catch((err) => {
                    console.error(err);
                });
        },
        postMessage (e) {
            const fields = e.target.elements;
            const messageBody = fields.messageBody.value;
            fetch(this.$data.ROOT_API + '/auth/ticket/message/new', {
                method: 'POST',
                body: JSON.stringify({
                    ticketId: this.$route.params.ticketId,
                    messageBody,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            }).then((res) => {
                return res.json();
            }).then((message) => {
                this.fetchTicket();
            }).catch((err) => {
                console.error(err);
            });
        },
    },
    created () {
        this.fetchTicket();
    },
};
</script>

<style scoped>
.form-item {
    display: inline-block;
    margin: 5px;
}
.form-item label {
    display: inline-block;
    width: 150px;
}
.message-block {
    margin: 5px;
    padding: 0px 40px;
    border: 2px solid;
    background-color: #c3c3c3;
}
.messages-container {
    margin-left: 5px;
    margin-right: 40px;
}
</style>
