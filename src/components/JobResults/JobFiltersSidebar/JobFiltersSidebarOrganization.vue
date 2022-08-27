<template>
  <accordian header="Degree" />
  <accordian header="Job types" />
  <accordian header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="organization in UNIQUE_ORGANIZATIONS"
            :key="organization"
            class="w-1/2 h-8"
          >
            <input
              type="checkbox"
              v-model="selectedOrganization"
              :value="organization"
              class="mr-3"
              :id="organization"
              @change="selectOrganization"
            />
            <label :for="organization">{{ organization }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordian>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { UNIQUE_ORGANIZATIONS, ADD_SELECTED_ORGANIZATIONS } from "@/store";
import Accordian from "@/components/Shared/Accordian.vue";
export default {
  name: "JobFilterSidebarOrganization",
  components: {
    Accordian,
  },
  data() {
    return {
      selectedOrganization: [],
    };
  },
  computed: {
    // UNIQUE_ORGANIZATIONS() {
    //   return this.$store.getters.UNIQUE_ORGANIZATION;
    // },
    ...mapGetters([UNIQUE_ORGANIZATIONS]),
  },
  methods: {
    ...mapMutations([ADD_SELECTED_ORGANIZATIONS]),
    selectOrganization() {
      this.ADD_SELECTED_ORGANIZATIONS(this.selectedOrganization);
    },
  },
};
</script>
