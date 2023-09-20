<script setup>
import TheHeader from './components/TheHeader.vue';
import BaseCard from './components/BaseCard.vue';
import { PROJECTS } from './data/data';
</script>

<template>
  <TheHeader />
  <main class="main">
    <BaseCard v-for="project in PROJECTS" :key="project.id" :projects="project" />
  </main>
</template>
<style scoped lang="scss">
.main {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-width: 1600px;
  margin: 50px auto;
}
</style>
