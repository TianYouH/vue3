<template>
  <div id="hTest"><el-button @click="childClick">子组建按钮</el-button></div>
</template>
<script>
export default {
  name: "h-test",
  data() {
    return {
      testText: "子组件"
    };
  },
  mounted() {},
  computed: {},
  methods: {
    childClick() {
      console.log(this.$parent);
      this.$parent.parentClick1();
      this.$parent.$_privateProperty_parentClick2();
      this.$parent._huhuhu();
      this.$parent.$_huhuhu();
    }
  }
};
</script>
<style scoped></style>
