<script setup>
import { ref, onMounted } from 'vue'
import ShopButton from './Button/ShopButton.vue';

const scrollContainer = ref(null)
const SCROLL_AMOUNT = 300
const isAtStart = ref(true)
const isAtEnd = ref(false)
const images = [
    {
        src: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_580,c_limit/b5449146-ce0b-462f-bf97-67650e9183c6/nike-just-do-it.png',
        alt: 'Air Force 1',
    },
    {
        src: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_580,c_limit/7cc8d3dc-56e8-4e6c-83c6-87e1a5b865cd/nike-just-do-it.png',
        alt: 'Air Max',
    },
    {
        src: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_580,c_limit/e9097b94-cc80-4316-9cf2-dee76a1b0b52/nike-just-do-it.png',
        alt: 'P-6000.',
    },
    {
        src: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_580,c_limit/02c122bf-c286-4a71-b16d-618e25ebebee/nike-just-do-it.png',
        alt: 'Snox',
    },
    {
        src: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_580,c_limit/0ddf45b9-cc38-4783-bc50-e5782b1cdee0/nike-just-do-it.png',
        alt: 'Air Jordan',
    },
    {
        src: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_580,c_limit/6563d85b-844a-410c-a57f-cfe5108ed169/nike-just-do-it.png',
        alt: 'Pegasus',
    },
    {
        src: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_580,c_limit/276822a0-2d50-41fc-9431-0a66b1c8aff3/nike-just-do-it.png',
        alt: 'Vomero',
    },
    {
        src: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_580,c_limit/249e3ffd-1056-46ec-a20e-e971530316e3/nike-just-do-it.png',
        alt: 'Metcon',
    },
    {
        src: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_580,c_limit/a9cebb9e-1486-4965-8ac4-42f9b3833590/nike-just-do-it.png',
        alt: 'Mercurial',
    },
]

const updateScrollState = () => {
    const el = scrollContainer.value
    isAtStart.value = el.scrollLeft <= 10
    isAtEnd.value = el.scrollLeft + el.clientWidth >= el.scrollWidth - 10
}

const scrollLeft = () => {
    scrollContainer.value.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' })
}

const scrollRight = () => {
    scrollContainer.value.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' })
}

onMounted(() => {
    updateScrollState()
    scrollContainer.value.addEventListener('scroll', updateScrollState)
})
</script>

<template>
    <div :class="['flex flex-col w-full h-[550px] max-w-[1920px] mx-auto ', isAtEnd ? 'pr-4 md:pr-10' : 'pl-4 md:pl-10']">
        <div class="flex items-center justify-between w-full mb-4 pr-4 md:pr-10">
            <h1 class="text-2xl tracking-tighter ml-10">Shop Our Icons</h1>
            <div class="flex gap-2">
                <button type="button" class="p-3 rounded-full h-full bg-[#E5E5E5] hover:bg-[#CACACB] transition-opacity"
                    @click="scrollLeft" :class="{ 'opacity-20 hover:bg-[#E5E5E5]': isAtStart }">
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px"
                        fill="none">
                        <path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path>
                    </svg></button>
                <button type="button" class="p-3 rounded-full h-full bg-[#E5E5E5] hover:bg-[#CACACB] transition-opacity"
                    @click="scrollRight" :class="{ 'opacity-20 hover:bg-[#E5E5E5]': isAtEnd }">
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px"
                        fill="none">
                        <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path>
                    </svg></button>
            </div>
        </div>
        <div class="scroll-container group">
            <div ref="scrollContainer" class="flex overflow-x-auto snap-x overflow-y-hidden custom-scrollbar pl-2">
                <div class="flex flex-nowrap">
                    <div class="flex-none min-w-[30%] snap-start pr-2" v-for="(image, index) in images" :key="index">
                        <img :src="image.src" :alt="image.alt" class="w-full object-cover" loading="lazy" />
                        <div class="translate-y-[-30px]">
                            <ShopButton :label="image.alt" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.snap-x {
    scroll-snap-type: x mandatory;
}

.snap-start {
    scroll-snap-align: start;
}

.scroll-container {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.custom-scrollbar {
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.group:hover .custom-scrollbar::-webkit-scrollbar {
    opacity: 1;
}

.group:hover .custom-scrollbar {
    scrollbar-width: thin;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 9999px;
    visibility: hidden;
}

.group:hover .custom-scrollbar::-webkit-scrollbar-thumb {
    visibility: visible;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: black;
}
</style>