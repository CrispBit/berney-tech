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

const store = new Vuex.Store({
    strict: true,
    state: {
        loggedIn: false,
        user: emptyUser,
    },
    mutations: { setUserInfo },
    actions: { registerUser },
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    store,
});
