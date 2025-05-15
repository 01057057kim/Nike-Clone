<script setup>
import ShopButton from './Button/ShopButton.vue';
</script>
<template>
    <div class="image-container w-full max-w-[1920px] py-6 px-4 md:px-16 mx-auto">
        <img class="hidden md:block"
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1765,c_limit/e90075da-d28a-4f66-9f61-f646dcb4cb47/nike-just-do-it.png"
            alt="Kylian Mbappe">
        <img class="block md:hidden"
            src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_782,c_limit/7b85a26a-2e57-424f-8bb9-4518897066ef/nike-just-do-it.png"
            alt="Kylian Mbappe mobile">
        <div class=" flex-col text-center items-center justify-center gap-1 translate-y-[-150px] hidden md:flex text-nowrap ">
            <p class="font-medium text-sm">Athlete Picks</p>
            <h3 class="text-xl mb-4">Kylian Mbappé </h3>
            <button class="bg-black text-white px-2 text-sm sm:text-base rounded-2xl cursor-pointer hover:bg-[rgba(0,0,0,0.6)] w-[70px] h-[36px]">Shop</button>
        </div>
         <div class="flex-col text-start items-start justify-start gap-1 translate-y-[-50px] translate-x-[40px] flex md:hidden text-nowrap w-0">
            <p class="font-medium text-sm">Athlete Picks</p>
            <h3 class="text-xl mb-4">Kylian Mbappé </h3>
            <button class="bg-black text-white px-2 text-sm sm:text-base rounded-2xl cursor-pointer hover:bg-[rgba(0,0,0,0.6)] w-[70px] h-[36px]">Shop</button>
        </div>
    </div>
</template>
<style scoped>
@media (max-width: 720px) {
    .image-container {
        padding-left: 0px;
        padding-right: 0px;
        padding-top: 5px;
        padding-bottom: 5px;
    }
}
</style>