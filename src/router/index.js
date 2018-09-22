import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home/Home';
import About from '@/components/About/About';
import Signup from '@/components/Signup/Signup';
import Login from '@/components/Login/Login';
import Logout from '@/components/Logout/Logout';
import NotFound from '@/components/NotFound/NotFound';
import Admin from '@/components/Admin/Admin';
import Users from '@/components/Admin/Users';
import Tickets from '@/components/Tickets/Tickets';
import NewTicket from '@/components/Tickets/New';
import ViewTicket from '@/components/Tickets/View';

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
        {
            path: '*',
            component: NotFound,
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin,
        },
        {
            path: '/admin/users',
            name: 'users',
            component: Users,
        },
        {
            path: '/tickets',
            name: 'tickets',
            component: Tickets,
        },
        {
            path: '/tickets/new',
            name: 'new-ticket',
            component: NewTicket,
        },
        {
            path: '/tickets/view/:ticketId',
            name: 'view-ticket',
            component: ViewTicket,
        },
    ],
    mode: 'history',
});
