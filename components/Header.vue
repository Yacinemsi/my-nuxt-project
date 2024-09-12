<template>
  <header class="w-full fixed top-0 z-50 p-6">
    <div
      :style="{
        boxShadow: computedBoxShadow,
        backgroundColor: computedBackgroundColor,
      }"
      class="relative max-w-screen-xl mx-auto rounded-3xl flex justify-between items-center h-16 px-6 transition-all duration-300"
    >
      <div
        class="absolute inset-0 rounded-3xl z-[-1] transition-opacity duration-300"
      ></div>

      <div class="sm:basis-[30%] basis-1/2">
        <img
          class="w-24 sm:w-32"
          src="../statics/logos/logoVaultFlow.svg"
          alt="logoVaultFlow"
        />
      </div>
      <div class="basis-1/2 sm:basis-2/5">
        <nav class="hidden sm:block">
          <ul class="flex text-white text-sm justify-evenly font-light">
            <li><NuxtLink href="#">Features</NuxtLink></li>
            <li><NuxtLink href="#">Pricing</NuxtLink></li>
            <li><NuxtLink href="#">About us</NuxtLink></li>
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
          class="fixed flex flex-col top-0 right-0 w-2/5 h-full bg-[#0b0121] z-50 p-8"
        >
          <button @click="toggleMenu" class="text-white text-md mb-4 self-end">
            ✖
          </button>
          <ul class="flex flex-col mt-8 text-white text-lg">
            <li class="mb-6"><NuxtLink href="#">Features</NuxtLink></li>
            <li class="mb-6"><NuxtLink href="#">Pricing</NuxtLink></li>
            <li class="mb-6"><NuxtLink href="#">About us</NuxtLink></li>
          </ul>
        </div>
        <div class="flex-grow" @click="toggleMenu"></div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

const isMenuOpen = ref(false);
const scrollY = ref(0);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleScroll = () => {
  scrollY.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// Calcule l'opacité du background
const computedBackgroundColor = computed(() => {
  const opacity = Math.min(1, scrollY.value / 50); // Ajuste la valeur pour la vitesse du changement
  return `rgba(11, 1, 33, ${Math.max(0.5, opacity)})`; // Démarre à 50% d'opacité
});

// Calcule la box-shadow au scroll
const computedBoxShadow = computed(() => {
  const shadowOpacity = Math.min(1, scrollY.value / 200); // Ajuste l'opacité de l'ombre en fonction du scroll
  return `2px 2px 15px rgba(47, 52, 154, ${shadowOpacity})`; // Box-shadow avec la couleur #2F349A
});
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
