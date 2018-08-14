<template>
    <div>
        <h1>Signup</h1>
        <form v-on:submit.prevent="handleSignup">
            <div class="form-item">
                <label>Email:</label>
                <input type="text" name="email" />
            </div>
            <div class="form-item">
                <label>Last Name</label>
                <input type="text" name="lastName" />
            </div>
            <div class="form-item">
                <label>First Name</label>
                <input type="text" name="firstName" />
            </div>
            <div class="form-item">
                <label>Password:</label>
                <input type="password" name="password" />
            </div>
            <div class="form-item">
                <label>Confirm password:</label>
                <input type="password" name="confirmPassword" />
            </div>
            <div>
                <input type="submit" value="Sign Up" />
            </div>
        </form>
        <ul id="error-list">
            <li v-for="error in errors" v-bind:key="error.param">
                {{error.msg}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Signup',
    data () {
        return {
            ROOT_API: process.env.ROOT_API,
            errors: '',
        };
    },
    methods: {
        handleSignup (e) {
            const fields = e.target.elements;
            const email = fields.email.value;
            const firstName = fields.firstName.value;
            const lastName = fields.lastName.value;
            const password = fields.password.value;
            const confirmPassword = fields.confirmPassword.value;
            this.$http.post(this.$data.ROOT_API + '/auth/signup', {
                email,
                firstName,
                lastName,
                password,
                confirmPassword,
            }).then((response) => {
                console.log(response);
            }).catch((response) => {
                this.$data.errors = response.body.errors;
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
