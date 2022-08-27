<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <job-listing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>
    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'JobSearch', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Previous</router-link
          >
          <router-link
            v-if="nextPage"
            :to="{ name: 'JobSearch', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import { FILTER_JOBS_BY_ORGANIZATION } from "@/store";
import { FETCH_JOBS } from "@/store";
import JobListing from "@/components/JobResults/JobListing.vue";

export default {
  name: "JobsListing",
  components: {
    JobListing,
  },
  mounted() {
    // const baseUrl = process.env.VUE_APP_API_URL;
    // const response = await Axios.get(`${baseUrl}/jobs`);
    // this.jobs = getJobs();
    // this.$store.dispatch(FETCH_JOBS);
    this.FETCH_JOBS();
  },
  computed: {
    ...mapGetters([FILTER_JOBS_BY_ORGANIZATION]),
    ...mapState(["jobs"]),
    currentPage() {
      const pageString = this.$route.query.page || "1";
      return Number.parseInt(pageString);
    },
    previousPage() {
      const previousPage = this.currentPage - 1;
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : undefined;
    },
    nextPage() {
      const nextPage = this.currentPage + 1;
      const maxPage = Math.ceil(this.FILTER_JOBS_BY_ORGANIZATION.length / 10);
      return nextPage <= maxPage ? nextPage : undefined;
    },
    displayedJobs() {
      const firstIndex = (this.currentPage - 1) * 10;
      const lastIndex = this.currentPage * 10;
      return this.FILTER_JOBS_BY_ORGANIZATION.slice(firstIndex, lastIndex);
    },
  },
  methods: {
    ...mapActions([FETCH_JOBS]),
  },
};
</script>
