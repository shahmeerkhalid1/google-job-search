<template>
  <form
    @submit.prevent="searchForJobs"
    class="flex items-center w-full h-12 mt-12 border border-solid border-brand-gray-3 rounded-3xl"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label for="" class="absolute left-0 -top-10">Role</label>
        <text-input v-model="role" placeholder="Software engineer" />
        <!-- <text-input
          placeholder="Software engineer"
          :value="role"
          @updateValues="updateRole"
        /> -->
        <!-- <input
          type="text"
          :value="role"
          placeholder="Software engineer"
          class="w-full text-lg font-normal focus:outline-none"
          @input="updateRole"
        /> -->
      </div>
      <span
        class="flex items-center h-full px-3 border-l border-r border-brand-gray-3 bg-brand-gray-2"
        >in</span
      >
      <div class="flex items-center flex-1 relative pl-3">
        <label for="" class="absolute left-0 -top-10">Where?</label>
        <text-input v-model="location" placeholder="Los Angeles" />
        <!-- <text-input
          placeholder="Los Angeles"
          :value="location"
          @updateValues="updateLocation"
        /> -->
        <!-- <input
          type="text"
          :value="location"
          placeholder="Los Angeles"
          class="w-full text-lg font-normal focus:outline-none"
          @input="updateLocation"
        /> -->
      </div>
    </div>
    <action-button text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import TextInput from "@/components/Shared/TextINput.vue";
export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
    TextInput,
  },
  data() {
    return {
      role: "",
      location: "",
    };
  },
  methods: {
    // updateRole(payload) {
    //   this.role = payload;
    // },
    // updateLocation(payload) {
    //   this.location = payload;
    // },
    searchForJobs() {
      this.$router.push({
        name: "JobSearch",
        query: { role: this.role, location: this.location },
      });
    },
  },
};
</script>
