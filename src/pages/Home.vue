<script setup>
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import Collections from '@/components/Collections.vue';
import Personalized from '@/components/Personalized.vue';
import Promotional from '@/components/Promotional.vue'
</script>

<template>
    <header>
        <Navbar />
    </header>
    <main>
        <Hero />
    </main>
    <section>
        <Collections />
    </section>
    <section>
        <Personalized />
    </section>
    <section>
        <Promotional />
    </section>
</template>
