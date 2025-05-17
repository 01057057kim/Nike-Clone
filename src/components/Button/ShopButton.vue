<template>
    <div>
        <div class="flex flex-col text-white text-start translate-y-[-65px] translate-x-[40px] font-normal w-[0px] text-nowrap">
            <span class="text-[1rem]  "> {{ headline }}</span>
            <span class="text-[1.3rem]"> {{ description }}</span>
        </div>
        <button
            class="bg-white text-black px-4 text-sm sm:text-base rounded-2xl cursor-pointer hover:bg-[rgba(228,228,228,0.8)] translate-y-[-45px] translate-x-[40px] w-auto h-[36px]"
            @click="onClick">
            <div class="flex items-center justify-center gap-1">

                <span class="tracking-tight font-medium text-[16px]">
                    <slot>{{ label }}</slot>
                </span>
            </div>
        </button>
    </div>
</template>

<script setup>
defineProps({
    label: {
        type: String,
        default: 'Shop'
    },
    headline: {
        type: String,
    },
    description: {
        type: String,
    },
    onClick: Function
})
</script>
