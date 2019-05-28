<template>
  <div class="iframe">
    <iframe src="https://www.baidu.com" frameborder="0"></iframe>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Iframe extends Vue {}
</script>
<style lang="scss" scoped>
.iframe {
  width: 100%;
  height: 100%;
  > iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
