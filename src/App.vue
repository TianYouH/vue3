<template>
  <div id="app">
    <el-container class="container">
      <el-aside width="200px">
        <el-menu router>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i> <span>一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/">拖拽(数据交换)</el-menu-item>
              <el-menu-item index="/iframe">Iframe</el-menu-item>
              <el-menu-item index="/cLodop">C-Lodop</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main><router-view /></el-main>
    </el-container>
  </div>
</template>
<style lang="scss">
body,
html {
  height: 100%;
  margin: 0;
}
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
