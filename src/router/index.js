import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home/Home';
import About from '@/components/About/About';
import Signup from '@/components/Signup/Signup';
import Login from '@/components/Login/Login';
import Logout from '@/components/Logout/Logout';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/signup',
            name: 'signup',
            component: Signup,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/logout',
            name: 'logout',
            component: Logout,
        },
    ],
    mode: 'history',
});
