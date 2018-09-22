// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Vuex);

const emptyUser = {
    email: null,
    firstName: null,
    lastName: null,
    subscription: null,
    accessLevel: null,
};

const emptyAdminData = {
    users: null,
};

function registerUser ({ commit }) {
    fetch(process.env.ROOT_API + '/auth/get', { credentials: 'include' })
        .then((res) => {
            return res.json();
        }).then((user) => {
            commit('setUserInfo', user);
        }).catch((err) => {
            console.error(err);
        });
}

function setUserInfo (state, user) {
    if (user) {
        state.user = user;
        state.loggedIn = true;
    } else {
        state.user = emptyUser;
        state.loggedIn = false;
    }
}

function registerUsers ({ commit }) {
    fetch(process.env.ROOT_API + '/admin/getUsers', { credentials: 'include' })
        .then((res) => {
            return res.json();
        }).then((users) => {
            commit('setUsersInfo', users);
        }).catch((err) => {
            console.error(err);
        });
}

function setUsersInfo (state, users) {
    state.adminData.users = users;
}

const store = new Vuex.Store({
    strict: true,
    state: {
        loggedIn: false,
        user: emptyUser,
        adminData: emptyAdminData,
    },
    mutations: { setUserInfo, setUsersInfo },
    actions: { registerUser, registerUsers },
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    store,
});
