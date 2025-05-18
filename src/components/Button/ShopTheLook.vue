<template>
  <button
    class="bg-white text-black px-2 text-sm sm:text-base rounded-2xl cursor-pointer hover:bg-[rgba(228,228,228,0.8)] translate-y-[-75px] translate-x-[25px] sm:translate-x-[40px] w-[160px] h-[36px]"
    @click="onClick"
  >
    <div class="flex items-center justify-center gap-1">
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px"
              fill="none">
              <path stroke="currentColor" stroke-width="1.5" d="M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clip-rule="evenodd"></path>
              <path stroke="currentColor" stroke-width="1.5"
                d="M21.602 11.566a.74.74 0 010 .867C20.54 13.924 16.73 18.75 12 18.75s-8.532-4.828-9.593-6.318a.74.74 0 010-.864C3.468 10.078 7.27 5.25 12 5.25c4.73 0 8.54 4.826 9.602 6.316z"
                clip-rule="evenodd"></path>
            </svg>
      <span class="tracking-tight font-medium text-[16px]">
        <slot>{{ label }}</slot> 
      </span>
    </div>
  </button>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: 'Shop the Look'
  },
  onClick: Function
})
</script>
