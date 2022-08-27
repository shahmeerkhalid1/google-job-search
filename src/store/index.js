import getJobs from "@/api/getJobs";
import { createStore } from "vuex";
export const LOGIN_USER = "LOGIN_USER";
export const RECIEVE_JOBS = "GET_JOBS";
export const FETCH_JOBS = "FETCH_JOBS";
export const UNIQUE_ORGANIZATIONS = "UNIQUE_ORGANIZATIONS";
export const ADD_SELECTED_ORGANIZATIONS = "ADD_SELECTED_ORGANIZATIONS";
export const FILTER_JOBS_BY_ORGANIZATION = "FILTER_JOBS_BY_ORGANIZATION";
export const state = () => {
  return {
    isLoggedIn: false,
    jobs: [],
    selectedOrganization: [],
  };
};

export const mutations = {
  [LOGIN_USER](state) {
    state.isLoggedIn = true;
  },
  [RECIEVE_JOBS](state, jobs) {
    state.jobs = jobs;
  },
  [ADD_SELECTED_ORGANIZATIONS](state, organizations) {
    state.selectedOrganization = organizations;
  },
};

export const actions = {
  [FETCH_JOBS]: async (context) => {
    const jobListing = await getJobs();
    context.commit(RECIEVE_JOBS, jobListing);
  },
};

export const getters = {
  [UNIQUE_ORGANIZATIONS](state) {
    const uniqueOrganization = new Set();
    state.jobs.forEach((job) => uniqueOrganization.add(job.organization));
    return uniqueOrganization;
  },
  [FILTER_JOBS_BY_ORGANIZATION](state) {
    if (state.selectedOrganization.length === 0) {
      return state.jobs;
    }
    return state.jobs.filter((job) =>
      state.selectedOrganization.includes(job.organization)
    );
  },
};

const store = createStore({
  state,
  mutations,
  actions,
  getters,
  strict: process.env.NODE_ENV !== "production",
});

// console.log(store.state.isLoggedIn);
// store.commit("LOGIN_USER");
// console.log(store.state.isLoggedIn);

export default store;
