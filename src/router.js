import vueRouter from 'vue-router'
import App from './App'
import User from './components/User'
import Login from './components/Login'
import Register from './components/Register'
import UserBalance from './components/UserBalance'
import EgresosList  from './components/Egresos/List'
import Ingresos_models from './components/appingresos/index'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
    {
        path: '/',
        name: "root",
        component: Login
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
    {
        path: '/egresos/:username',
        name: "egresos",
        component: EgresosList
    },
    {
        path: '/ingresos/:username',
        name: "ingresos",
        component: Ingresos_models
    }
    ],
})
export default router
