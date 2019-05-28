import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "drop",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/drop/index.vue")
    },
    {
      path: "/iframe",
      name: "iframe",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/iFrame/index.vue")
    }
  ]
});
