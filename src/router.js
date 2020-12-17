import vueRouter from 'vue-router'
import User from './components/User'
import Login from './components/Login'
import Register from './components/Register'
import UserBalance from './components/UserBalance'
import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
    {
        path: '/',
        name: "root",
        component: App
    },
    {
        path: '/user/:username',
        name: "user",
        component: User
    },
    {
        path: '/login',
        name: "login",
        component: Login
    },
    {
        path: '/user/balance/:username',
        name: "user_balance",
        component: UserBalance
    },
    {
        path: '/register',
        name: "register",
        component: Register
    },
    ]
})
export default router