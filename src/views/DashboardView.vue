<template>
  <div>
    <h2>{{header}}</h2>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import HelloWorld from '../components/HelloWorld.vue';

@Component(
  {
    components: {
      HelloWorld
    }
  }
)
export default class DashboardView extends Vue {
  header: string;

  constructor() {
    super();
    this.header = "Welcome to the recipe dashboard";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
