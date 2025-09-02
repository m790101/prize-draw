<template>
  <div
    v-if="isLoading"
    class=""
  >
    <!-- Skeleton Title -->
    <div class="mb-2">
      <div class="h-7 bg-gray-300 rounded animate-pulse mx-auto w-32"></div>
    </div>

    <!-- Skeleton Winner Name -->
    <div class="mb-4">
      <div class="h-8 bg-gray-400 rounded animate-pulse mx-auto w-48"></div>
    </div>

    <!-- Skeleton Message -->
    <div class="px-4 py-2">
      <div class="h-4 bg-gray-300 rounded animate-pulse mx-auto w-64"></div>
    </div>
  </div>
</template>



<script setup>
import { computed } from "vue";

// Props
const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
});

</script>

<style scoped>
/* Skeleton loading animation */
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Winner reveal animation */
@keyframes winner-reveal {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-winner-reveal {
  animation: winner-reveal 0.6s ease-out;
}

/* Hover effects */
.animate-winner-reveal:hover {
  transform: scale(1.02);
  transition: transform 0.2s ease;
}

/* Different skeleton bar heights and widths for variety */
.skeleton-title {
  height: 28px;
  width: 128px;
}

.skeleton-winner {
  height: 32px;
  width: 192px;
}

.skeleton-message {
  height: 16px;
  width: 256px;
}

/* Staggered animation delays for more realistic effect */
.animate-pulse:nth-child(1) {
  animation-delay: 0s;
}

.animate-pulse:nth-child(2) {
  animation-delay: 0.2s;
}

.animate-pulse:nth-child(3) {
  animation-delay: 0.4s;
}
</style>