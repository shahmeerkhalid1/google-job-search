import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "@/views/HomeView.vue";
// import JobSearchView from "@/views/JobSearchView.vue";
// import JobView from "@/views/JobView.vue";
const HomeView = () => import("@/views/HomeView.vue");
const JobSearchView = () => import("@/views/JobSearchView.vue");
const JobView = () => import("@/views/JobView.vue");
const TeamView = () => import("@/views/TeamsView.vue");
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    name: "Team",
    path: "/teams",
    component: TeamView,
  },
  {
    path: "/jobs/results",
    name: "JobSearch",
    component: JobSearchView,
  },
  {
    path: "/jobs/results/:id",
    name: "JobListing",
    component: JobView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
      behavior: "smooth",
    };
  },
});

export default router;

// {
//   path: "/about",
//   name: "about",
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () =>
//     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
// },
