<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const MAX_HEIGHT = 838; //3250px when zoom out 25%
const MIN_HEIGHT = 230;
const DESKTOP_WIDTH = 1920;
const MOBILE_WIDTH = 375;
const SPECIAL_CASE_WIDTH = 817;
const SPECIAL_CASE_ADJUSTMENT = 280;

const dynamicHeight = ref(MAX_HEIGHT);

const calculateHeight = () => {
  const viewportWidth = window.innerWidth;

  if (viewportWidth >= DESKTOP_WIDTH) {
    dynamicHeight.value = MAX_HEIGHT;
    return;
  }

  const ratio = (viewportWidth - MOBILE_WIDTH) / (DESKTOP_WIDTH - MOBILE_WIDTH);
  const calculatedHeight = MIN_HEIGHT + ratio * (MAX_HEIGHT - MIN_HEIGHT);
  const responsiveHeight = Math.max(MIN_HEIGHT, Math.min(MAX_HEIGHT, calculatedHeight));

  if (viewportWidth <= SPECIAL_CASE_WIDTH) {
    dynamicHeight.value = responsiveHeight + SPECIAL_CASE_ADJUSTMENT;
  } else {
    dynamicHeight.value = responsiveHeight;
  }
};

onMounted(() => {
  calculateHeight();
  window.addEventListener('resize', calculateHeight);
});

onUnmounted(() => {
  window.removeEventListener('resize', calculateHeight);
});
</script>

<template>
  <div class="banner-container bg-gray-900 w-full z-0 mb-6" :style="{ height: dynamicHeight + 'px' }">
    <div class="pl-4 sm:pl-6 md:pl-8 h-full flex flex-col items-start justify-end pb-6 md:pb-8 lg:pb-10">
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-[900] text-white">
        TURN OFFSEASON<br>ON
      </h1>
      <p class="text-sm sm:text-base md:text-lg text-white mt-2 md:mt-3 lg:mt-4">
        Get set for summer with gear that can take the heat
      </p>
      <div class="mt-3 sm:mt-4 md:mt-5 lg:mt-6 flex gap-2 z-10">
        <button type="button"
          class="bg-white text-black px-3 py-1 sm:px-4 text-sm sm:text-base font-medium rounded-2xl cursor-pointer hover:bg-[rgba(228,228,228,0.8)]">
          Shop
        </button>
        <button type="button"
          class="bg-white text-black px-3 py-1 sm:px-4 text-sm sm:text-base font-medium rounded-2xl cursor-pointer hover:bg-[rgba(228,228,228,0.8)]">
          Shop Kids
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner-container {
  position: relative;
  overflow: hidden;
  transition: height 0.3s ease;
}
</style>