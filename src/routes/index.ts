import Vue from 'vue'
import VueRouter from 'vue-router'
import RecipeView from '../views/RecipeView.vue';
import DashboardView from '../views/DashboardView.vue';



Vue.use(VueRouter)
const navRouter = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: DashboardView },
    { path: '/recipe', name: 'recipe', component: RecipeView }
  ]
});

export default navRouter;