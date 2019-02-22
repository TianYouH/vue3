<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <input type="text" v-model="mag" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <video src="http://10.10.133.10:9090/hls/test.m3u8"></video>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

// 引入组建
@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  // data
  @Provide() mag: string = `测试2`;
}
</script>
