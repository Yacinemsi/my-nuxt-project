<template>
  <div
    class="rounded-xl bg-gradient-to-b from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0)] shadow-custom"
  >
    <div>
      <div class="flex justify-center items-center mb-4">
        <img :src="logo" alt="Feature Logo" class="h-12 w-12" />
      </div>
      <!-- Slots pour le contenu dynamique -->
      <div>
        <h3 class="text-white text-xl font-medium mb-2">
          <slot name="title"></slot>
        </h3>
      </div>
      <div>
        <p class="text-gray-300 mb-4">
          <slot name="description"></slot>
        </p>
      </div>
      <div>
        <NuxtLink :to="link" class="text-purple-400 hover:underline">
          <slot name="link"></slot>
        </NuxtLink>
      </div>
    </div>
    <div v-if="extraImage" class="flex justify-center items-center mb-4">
      <img :src="extraImage" alt="Extra Image" class="h-20 w-auto" />
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
});
</script>
