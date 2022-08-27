<template>
  <section class="mb-16">
    <h1 class="font-bold tracking-tighter brand-headline mb-14">
      <span :class="actionVerbClasses">{{ actionVerb }}</span>
      <span class="block">for every one</span>
    </h1>
    <h3 class="text-3xl font-normal">Find your next job at Google</h3>
  </section>
</template>

<script>
import nextElementList from "@/composables/nextElementList";
export default {
  name: "Headline",
  data() {
    return {
      actionVerb: "Build",
      interval: null,
    };
  },
  created() {
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  computed: {
    actionVerbClasses() {
      return {
        // build: this.actionVerb === "Build",
        // create: this.actionVerb === "Create",
        // design: this.actionVerb === "Design",
        // code: this.actionVerb === "Code",
        [this.actionVerb.toLowerCase()]: true,
      };
    },
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actionVerbs = ["Build", "Create", "Design", "Code"];
        // const currentActionIndex = actionVerbs.indexOf(this.actionVerb);
        // const nextActionIndex = (currentActionIndex + 1) % 4;
        // const nextAction = actionVerbs[nextActionIndex];

        this.actionVerb = nextElementList(actionVerbs, this.actionVerb);
      }, 3000);
    },
  },
};
</script>

<style scoped>
.build {
  color: #1a73e8;
}
.create {
  color: #34a853;
}
.design {
  color: #f9ab00;
}
.code {
  color: #d93025;
}
.brand-headline {
  font-size: 88px;
  line-height: 1;
}
</style>
