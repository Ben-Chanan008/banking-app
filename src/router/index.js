import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import {useGlobalStore} from "@/stores/state.js";
import { createPinia } from "pinia";

const pinia = createPinia();
const globalStore = useGlobalStore(pinia);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/what-we-do',
      name: 'whatwedo',
      component: () => import('../views/WhatWeDo.vue')
    },
    {
      path: '/meet-the-team',
      name: 'meet-the-team',
      component: () => import('../views/MeetTheTeamView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/account/register',
      name: 'create-account',
      component: () => import('../views/RegisterView.vue'),
	    beforeEnter: (to, from, next) => {
		    if (globalStore.token)
			    next({name: 'dashboard'});
		    else
			    next();
	    }
    },
	{
	  path: '/user/login',
	  name: 'login',
	  component: () => import('../views/LoginView.vue'),
		beforeEnter: (to, from, next) => {
			if (globalStore.token)
				next({ name: 'dashboard' });
			else
				next();
		}
	},
    {
		path: '/user/dashboard',
	    name: 'dashboard',
	    component: () => import('../views/DashboardView.vue'),
	    beforeEnter: (to, from, next) => {
		    if (globalStore.token)
			    next();
		    else
			    next({name: 'login'});
	    },
      meta: {auth: true}
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../components/404.vue') 
    },
  ]
})

router.beforeEach((to, from, next) => {
  globalStore.verifyToken(next, to);
})

export default router
