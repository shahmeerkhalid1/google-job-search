<template>
  <div class="py-5 border-b border-solid border-brand-gray-2">
    <div
      @click="open"
      class="flex flex-wrap items-center justify-between cursor-pointer"
    >
      <h3 class="text-base font-semibold">{{ header }}</h3>
      <font-awesome-icon :icon="caretIcon" />
    </div>
    <div v-if="isOpen" class="w-full mt-5">
      <slot>
        <p>Whoops! Some body forget to populate me.</p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordian",
  props: {
    header: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    caretIcon() {
      return this.isOpen ? ["fas", "angle-up"] : ["fas", "angle-down"];
    },
  },
  methods: {
    open() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
