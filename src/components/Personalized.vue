<script setup>
import ShopButton from './Button/ShopButton.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const MAX_HEIGHT = 838;
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
const images = [
    {
        src: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_605,c_limit/a6150938-46d6-45af-826b-ef736edc9e7a/nike-just-do-it.jpg',
        alt: 'Nike 24.7 Collection',
        headline: 'Nike 24.7 Collection',
        description: 'Impossibly Soft',
    },
    {
        src: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_730,c_limit/670d7bf2-bd44-4312-ad72-b4d5fe1b8b60/nike-just-do-it.jpg',
        alt: 'Shox R4',
        headline: 'Shox R4',
        description: 'Nike Style By',
    },
    {
        src: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_725,c_limit/9a08babd-d3f4-49c9-9883-5fb66c83aac6/nike-just-do-it.png',
        alt: 'Stability. Zoom Air. Nice shoes.',
        headline: 'Stability. Zoom Air. Nice shoes',
        description: "Luka 4 'Gone Fishing'"
    },
    {
        src: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_725,c_limit/a361131c-5281-4da3-b55c-3347e5d70e15/nike-just-do-it.png',
        alt: 'Just in for Kids',
        headline: 'Just in for Kids',
        description: 'Nike Sonic Fly',
    },
]
</script>
<template>
    <div class="image-container w-full max-w-[1920px] px-4 md:px-16 mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
            <div v-for="(image, index) in images" :key="index">
                <img :src="image.src" :alt="image.alt" class="w-full aspect-square object-cover mb-[-100px]" loading="lazy"/>
                <ShopButton :headline="image.headline" :description="image.description" />
            </div>
        </div>
    </div>
</template>

<style scoped>
@media (max-width: 720px) {
    .image-container {
        padding-left: 0px;
        padding-right: 0px;
    }
}
</style>