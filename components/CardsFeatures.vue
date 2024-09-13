<template>
  <div
    class="rounded-xl flex flex-col gap-20 sm:flex-row justify-between items-center p-8 bg-gradient-to-b from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0)] shadow-custom"
  >
    <div :class="width" class="flex flex-col gap-2 h-full items-start">
      <div class="flex justify-center items-center">
        <img :src="logo" alt="Feature Logo" class="h-12 w-12" />
      </div>
      <!-- Slots pour le contenu dynamique -->
      <div>
        <h3 class="text-customGray text-lg sm:text-2xl font-medium mb-2">
          <slot name="title"></slot>
        </h3>
      </div>
      <div>
        <p class="text-customGray mb-4 text-xs sm:text-sm">
          <slot name="description"></slot>
        </p>
      </div>
      <div>
        <NuxtLink :to="link" class="text-white text-xs underline">
          <slot name="link"></slot>
        </NuxtLink>
      </div>
    </div>
    <div
      v-if="extraImage"
      :class="width"
      class="flex justify-center items-center mb-4"
    >
      <img :src="extraImage" alt="Extra Image" class="w-full" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  logo: {
    type: String,
  },
  link: {
    type: String,
  },
  extraImage: {
    type: String,
    default: null,
  },
  width: {
    type: String,
  },
});
</script>
