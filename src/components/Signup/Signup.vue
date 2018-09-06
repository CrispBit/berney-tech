<template>
    <div class="page">
        <h1>Signup</h1>
        <form v-if="!done" v-on:submit.prevent="handleSignup">
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
        <div v-else>
            <h2>You have successfully registered. Consider <a href="#">adding a plan</a></h2>
        </div>
        <ul id="error-list">
            <li v-for="error in errors" v-bind:key="error.param">
                {{error.msg}}
            </li>
            <li v-if="specialErrors.userExists">
                User with email exists. If you have forgotten your password, please <router-link to="/contact">contact us.</router-link>
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
            done: false,
            specialErrors: {},
        };
    },
    methods: {
        handleSignup (e) {
            this.errors = {};
            this.specialErrors = {};

            const fields = e.target.elements;
            const email = fields.email.value;
            const firstName = fields.firstName.value;
            const lastName = fields.lastName.value;
            const password = fields.password.value;
            const confirmPassword = fields.confirmPassword.value;
            fetch(this.$data.ROOT_API + '/auth/signup', {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    firstName,
                    lastName,
                    password,
                    confirmPassword,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            }).then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    return response.json().then((response) => {
                        throw response;
                    });
                }
            }).then((response) => {
                this.$store.dispatch('registerUser');
                this.done = true;
            }).catch((response) => {
                if ('errors' in response) {
                    this.$data.errors = response.errors;
                }
                if ('specialErrors' in response) {
                    let specialErrors = {};
                    for (const err of response.specialErrors) {
                        console.log(err);
                        switch (err.type) {
                        case 'user_exists':
                            specialErrors.userExists = true;
                            break;
                        }
                    }
                    this.specialErrors = specialErrors;
                }
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
