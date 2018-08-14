<template>
    <div>
        <h1>Logging out...</h1>
    </div>
</template>

<script>
export default {
    name: 'Logout',
    watch: {
        '$route' (to, from) {
            fetch(
                process.env.ROOT_API + '/auth/logout', {
                    method: 'POST',
                    body: {},
                }
            ).then(() => {
                this.$route.push('/');
            }).catch((err) => {
                console.error(err);
                this.$route.push('/');
            });
        },
    },
};
</script>
