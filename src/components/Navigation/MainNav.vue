<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex items-center h-full text-xl"
          >Google Careers
        </router-link>
        <nav class="h-full ml-12">
          <ul class="flex h-full m-0 p-0 list-none">
            <li
              class="h-full ml-9 first:ml-0"
              v-for="menuItem in menuItems"
              :key="menuItem.text"
            >
              <router-link
                :to="menuItem.url"
                class="flex items-center h-full py-2.5"
                >{{ menuItem.text }}</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <action-button
            v-if="!isLoggedIn"
            text="Sign In "
            type="primary"
            @click="LOGIN_USER"
          />
          <ProfileComponent v-else />
        </div>
      </div>
      <sub-nav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileComponent from "@/components/Navigation/ProfileComponent.vue";
import SubNav from "@/components/Navigation/SubNav.vue";
import { LOGIN_USER } from "@/store";
export default {
  name: "MainNav",
  components: {
    ActionButton,
    ActionButton,
    ProfileComponent,
    SubNav,
  },
  data() {
    return {
      menuItems: [
        { text: "Teams", url: "/teams" },
        { text: "Locations", url: "/" },
        { text: "Benefits", url: "/" },
        { text: "Jobs", url: "/jobs/results" },
        { text: "Students", url: "/" },
      ],
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
    // isLoggedIn() {
    //   return this.$store.state.isLoggedIn;
    // },
    ...mapState(["isLoggedIn"]),
  },
  methods: {
    // LOGIN_USER() {
    //   this.$store.commit(LOGIN_USER);
    // },
    ...mapMutations(["LOGIN_USER"]),
  },
};
</script>

<!-- 
1: Methods to write mapState

computed:{
  ...mapState({
    isLoggedIn: (state) => state.isLoggedIn
  }),
}


2: Methods to write mapState
computed:{
  ...mapState({
    isLoggedIn: "isLoggedIn"
  }),
}

3: Methods to write mapState
computed:{
  ...mapState(["isLoggedIn"]),
}

 -->
