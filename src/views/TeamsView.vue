<template>
  <header-container>
    <template v-slot:title>
      <h1 class="w-full text-4xl font-normal">Teams</h1>
    </template>
    <template v-slot:subtitle>
      <p class="mx-auto w-1/2 my-4 text-base font-light">
        Together, we create access to information and build products that
        improve people's lives. Want to be a Googler? Find your role.
      </p>
    </template>
  </header-container>
</template>

<script>
import HeaderContainer from "@/components/Shared/HeaderContainer.vue";
export default {
  name: "TeamView",
  components: {
    HeaderContainer,
  },
};
</script>
