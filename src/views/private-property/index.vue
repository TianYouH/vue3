<template>
  <div id="private-property">
    <el-button @click="parentClick1">你好世界1</el-button>
    <!-- <el-button @click="parentClick2">你好世界2</el-button>
    <el-button @click="parentClick3">你好世界3</el-button> -->
    <h-test></h-test>
    <p>text:{{ text }}</p>
  </div>
</template>
<script>
import hTest from "./components/h-test";

export default {
  name: "private-property",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    [hTest.name]: hTest
  },
  data() {
    return {
      text: 11223
    };
  },
  mounted() {},
  computed: {},
  methods: {
    parentClick1() {
      parentFunction(this);
    },
    $_privateProperty_parentClick2() {
      console.log("$_privateProperty_parentClick2");
    },
    _huhuhu() {
      console.log("_huhuhu");
    },
    $_huhuhu() {
      console.log("$_huhuhu");
    }
  }
};

function parentFunction(self) {
  console.log(self.text);
  self.text = 6666;
}
</script>
<style scoped></style>
