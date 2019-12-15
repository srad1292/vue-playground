<template>
  <h2>{{header}}</h2>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class RecipeView extends Vue {
  header: string;

  constructor() {
    super();
    this.header = "Welcome to a single recipe view";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
