import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

import mine from "./mine"
import home from "./home"
import free from "./free"
import login from "./login"
import register from "./register"
import moviedetail from "./moviedetail"
export default new Router({
    routes: [
        mine, home, moviedetail, free, login, register,
        {path: "/", redirect: home}
    ]
})