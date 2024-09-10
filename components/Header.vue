<template>
  <header class="w-full sm:fixed top-0 z-50 p-4">
    <div
      class="bg-header rounded-3xl flex justify-between items-center h-14 px-6"
    >
      <div class="sm:basis-[30%] basis-1/2">
        <img
          class="w-24 sm:w-32"
          src="../statics/logoVaultFlow.svg"
          alt="logoVaultFlow"
        />
      </div>
      <div class="basis-1/2 sm:basis-2/5">
        <nav class="hidden sm:block">
          <ul class="flex text-white text-sm justify-evenly font-light">
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">About us</a></li>
          </ul>
        </nav>
        <div class="sm:hidden w-full flex justify-end">
          <button @click="toggleMenu" class="text-white text-3xl">☰</button>
        </div>
      </div>
      <div class="basis-[30%] justify-end hidden sm:flex">
        <CtaButton> Download the app </CtaButton>
      </div>
    </div>
    <transition name="slide">
      <div v-if="isMenuOpen" class="fixed inset-0 z-40 flex">
        <div
          class="fixed flex flex-col top-0 right-0 w-1/2 h-full bg-[#0b0121] z-50 p-8"
        >
          <button @click="toggleMenu" class="text-white text-md mb-4 self-end">
            ✖
          </button>
          <ul class="flex flex-col mt-8 text-white text-lg">
            <li class="mb-6"><a href="#">Features</a></li>
            <li class="mb-6"><a href="#">Pricing</a></li>
            <li class="mb-6"><a href="#">About us</a></li>
          </ul>
        </div>
        <div class="flex-grow" @click="toggleMenu"></div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(100%);
}
</style>
