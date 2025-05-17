<script setup>
import ShopTheLook from './Button/ShopTheLook.vue'
import { ref } from 'vue'

const images = [
  {
    src: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_725,c_limit/6b729516-671d-427f-acba-72fa85763eb5/nike-just-do-it.jpg',
    alt: 'Hero Image 1',
  },
  {
    src: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_725,c_limit/80bbc705-24d3-4046-9f3f-20b3f4c5f178/nike-just-do-it.jpg',
    alt: 'Hero Image 2',
  },
  {
    src: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_725,c_limit/4253a03a-1922-4811-bf60-d0f8d9c27e43/nike-just-do-it.jpg',
    alt: 'Hero Image 3',
  },
]

const scrollContainer = ref(null)
let isDragging = false
let startX
let scrollLeft

function startDrag(e) {
  if (window.innerWidth >= 960) return
  isDragging = true
  startX = e.pageX - scrollContainer.value.offsetLeft
  scrollLeft = scrollContainer.value.scrollLeft
}

function onDrag(e) {
  if (!isDragging || window.innerWidth >= 960) return
  e.preventDefault()
  const x = e.pageX - scrollContainer.value.offsetLeft
  const walk = (x - startX) * 1.5
  scrollContainer.value.scrollLeft = scrollLeft - walk
}

function stopDrag() {
  isDragging = false
}

function handleClick() {
  console.log('##')
}
</script>

<template>
  <div class="container w-full max-w-[2050px] mx-auto">
    <div ref="scrollContainer" class="scroll-wrapper " @mousedown="startDrag" @mousemove="onDrag" @mouseup="stopDrag"
      @mouseleave="stopDrag">
      <div v-for="(image, index) in images" :key="index" class="image-block">
        <img :src="image.src" :alt="image.alt" class="w-full h-full " loading="lazy"/>
        <ShopTheLook label="Shop the Look" @click="handleClick()" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll-wrapper {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  cursor: grab;
}

.scroll-wrapper:active {
  cursor: grabbing;
}

.image-block {
  flex: 0 0 auto;
  min-width: 60%;
  max-width: 100%;
}

@media (min-width: 960px) {
  .scroll-wrapper {
    overflow: hidden;
    justify-content: center;
    cursor: default;
    flex-wrap: nowrap;
    gap: 0.5rem;
  }

  .image-block {
    flex: 0 0 auto;
    max-width: 31.8%;
    min-width: 30%;
  }
}
</style>
