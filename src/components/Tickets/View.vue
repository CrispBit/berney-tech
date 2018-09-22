<template>
    <div class="page">
        <h2>{{ ticket.categories.join(" > ") }}</h2>
    </div>
</template>

<script>
export default {
    name: 'ViewTicket',
    data () {
        return {
            ticket: {
                categories: [],
            },
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
    },
    created () {
        this.fetchTicket();
    },
};
</script>
