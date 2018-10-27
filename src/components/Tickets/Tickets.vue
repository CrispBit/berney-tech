<template>
    <div class="page">
        <h1>Tickets</h1>
        <ul>
            <li v-for="ticket in user.tickets" v-bind:key="ticket._id">
                Ticket <router-link :to="'/tickets/view/' + ticket._id">{{ ticket._id }}</router-link>: {{ ticket.categories.join(" > ") }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Tickets',
    computed: {
        user () {
            return this.$store.state.user;
        },
    },
};
</script>
