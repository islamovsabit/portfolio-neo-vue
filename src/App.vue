<script setup>
import Header from "@/components/HeaderView.vue";
import Footer from "@/components/FooterView.vue";
</script>
<template>
    <div class="wrapper">
        <Header />
        <RouterView/>
        <Footer/>
    </div>
</template>