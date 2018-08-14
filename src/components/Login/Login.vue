<template>
    <div>
        <h1>Login</h1>
        <form v-on:submit.prevent="handleLogin">
            <div class="form-item">
                <label>Email:</label>
                <input type="text" name="email" />
            </div>
            <div class="form-item">
                <label>Password:</label>
                <input type="password" name="password" />
            </div>
            <div>
                <input type="submit" value="Login" />
            </div>
        </form>
        <ul id="error-list">
            <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data () {
        return {
            ROOT_API: process.env.ROOT_API,
            errors: '',
        };
    },
    methods: {
        handleLogin (e) {
            const fields = e.target.elements;
            const email = fields.email.value;
            const password = fields.password.value;
            fetch(this.$data.ROOT_API + '/auth/login', {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            }).then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    return response.json().then((errors) => {
                        throw errors;
                    });
                }
            }).then((response) => {
                this.$store.dispatch('registerUser');
                this.$router.push('/');
            }).catch((errors) => {
                this.$data.errors = errors;
            });
        },
    },
};
</script>

<style>
    .form-item {
        margin: 5px;
    }
    .form-item label {
        display: inline-block;
        width: 150px;
    }
    .form-item input {
        width: 300px;
    }
    #error-list {
        color: red;
    }
</style>
