<template>
  <button
    :class="computedClasses"
    class="rounded-3xl transform-gpu py-2 px-6 hover:border-white relative overflow-hidden transition-all duration-500 ease-in-out hover:scale-105 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:transition-all before:duration-500 before:ease-in-out before:z-[-1] hover:before:left-0"
  >
    <NuxtLink class="text-xs sm:text-sm font-light" to="#"> <slot /> </NuxtLink>
  </button>
</template>

<script setup>
import { computed } from "vue";

// Définir les props pour les couleurs dynamiques
const props = defineProps({
  bgColor: {
    type: String,
    default: "bg-white", // Couleur de fond par défaut
  },
  textColor: {
    type: String,
    default: "text-violet", // Couleur du texte par défaut
  },

  borderType: {
    type: String,
    default: "border-[1px]", // Pas de bordure par défaut
  },
  hoverTextColor: {
    type: String,
    default: "hover:text-white", // Couleur blanche au survol par défaut
  },
  hoverBgGradient: {
    type: String,
    default:
      "before:bg-gradient-to-r before:from-[#0B0121] before:to-[#2f3094]", // Dégrader de couleur par défaut
  },
});

// Générer dynamiquement les classes pour le bouton
const computedClasses = computed(() => {
  return `${props.bgColor} ${props.textColor} ${props.borderType} ${props.hoverTextColor} ${props.hoverBgGradient}`;
});
</script>

<style scoped>
/* Styles supplémentaires */
</style>
