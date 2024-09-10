<template>
  <button
    :class="computedClasses"
    class="rounded-3xl py-1 px-4 relative overflow-hidden transition-all duration-500 ease-in-out hover:scale-105 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:transition-all before:duration-500 before:ease-in-out before:z-[-1] hover:before:left-0"
  >
    <a class="text-xs font-light" href="#"> <slot /> </a>
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
    default: "text-black", // Couleur du texte par défaut
  },

  borderType: {
    type: String,
    default: "border-none",
  },
  hoverTextColor: {
    type: String,
    default: "hover:text-white",
  },
  hoverBgGradient: {
    type: String,
    default:
      "before:bg-gradient-to-r before:from-[#0B0121] before:to-[#2f3094]",
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
