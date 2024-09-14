<template>
  <div
    class="rounded-xl flex flex-col sm:flex-row gap-10 sm:gap-20 mb-6 justify-between items-center p-6 sm:p-8 bg-gradient-to-b from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0)] shadow-custom"
  >
    <div
      v-if="!divWithButton"
      :class="width"
      class="flex flex-col gap-2 h-full items-start justify-between"
    >
      <div v-if="logo">
        <img :src="logo" alt="Feature Logo" class="h-12 w-12" />
      </div>
      <!-- Slots pour le contenu dynamique -->
      <div>
        <h3 class="text-customGray mb-2 text-lg sm:text-2xl font-medium">
          <slot name="title"></slot>
        </h3>
      </div>
      <div>
        <p class="text-customGray mb-4 text-xs sm:text-sm">
          <slot name="description"></slot>
        </p>
      </div>
      <div class="justify-self-end">
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
    <div
      v-if="divWithButton"
      class="flex flex-col gap-4 p-2 sm:p-6 items-center justify-center w-full"
    >
      <h3
        class="text-customGray mb-2 text-2xl sm:text-5xl font-bold text-center w-full sm:w-4/5"
      >
        Our powerful analytics provides invaluable insights.
      </h3>
      <p
        class="text-customGray mb-4 text-sm sm:text-md text-center w-full sm:w-4/5"
      >
        Unlock the power of data with our cutting-edge analytics product. Get
        instant insights with our user-friendly Analytics Dashboard, and take
        advantage of our innovative digital credit tokens to reward your
        customers and incentivize engagement.
      </p>
      <CtaButton
        bgColor="bg-transparent"
        textColor="text-white"
        hoverBgGradient="before:bg-gradient-to-r before:from-white before:to-white"
        hoverTextColor="hover:text-violet"
        >Download the app</CtaButton
      >
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
  divWithButton: {
    type: Boolean,
    default: false,
  },
});
</script>
