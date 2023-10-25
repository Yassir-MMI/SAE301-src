<script setup lang="ts">
// a completer
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <Header/>
  <RouterView />
  <Footer/>

</template>
