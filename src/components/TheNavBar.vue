<template>
  <div> 
    <nav> 
      <router-link to="/">Home</router-link>
      <router-link to="/recipe">Recipe</router-link>
    </nav> 
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TheNavBar extends Vue {
}
</script>

<style scoped>
  a {
    margin-right: 5px;
  }
</style>