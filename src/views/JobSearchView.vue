<template>
  <div class="flex flex-row flex-nowrap w-full">
    <job-filters-sidebar />
    <jobs-listing />
  </div>
</template>

<script>
import JobFiltersSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue";
import JobsListing from "@/components/JobResults/JobsListing.vue";
export default {
  name: "JobSearchView",
  components: {
    JobFiltersSidebar,
    JobsListing,
  },
};
</script>

<style lang="scss" scoped></style>
