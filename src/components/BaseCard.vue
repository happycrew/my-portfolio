<script setup>
import { ref } from 'vue';
import '@mdi/font/css/materialdesignicons.css';

const { projects } = defineProps(['projects']);
const show = ref(false);
</script>

<template>
  <v-card class="mx-auto v-theme--dark mt-10" width="420">
    <v-img :src="projects.img" alt="project_img" width="100%" height="100%" cover></v-img>

    <v-card-title> {{ projects.title }} </v-card-title>

    <v-card-subtitle class="card__subtitle">
      <strong>Tech Stack:</strong> {{ projects.techStack.join(', ') }}
    </v-card-subtitle>

    <v-card-actions class="test">
      <v-btn color="gray-lighten-2" variant="flat" :href="projects.deploy" target="_blank">
        Open
      </v-btn>
      <v-btn v-if="projects.githubLink" color="orange-lighten-2" variant="flat" :href="projects.githubLink" target="_blank">
        GitHub
      </v-btn>

      <v-spacer></v-spacer>
      <v-card-text v-if="projects.team" class="card__subtitle">
        <strong>Team:</strong> {{ projects.team }}
      </v-card-text>
      <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ projects.description }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<style scoped lang="scss">

.card__subtitle {
  white-space: wrap;
}

.zalupa {
  width: 50px;
  height: 50px;
}
</style>
