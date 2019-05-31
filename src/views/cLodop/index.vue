<template>
  <div id="c-lodop" class="container">
    <el-row>
      <el-col>
        <el-button type="primary" @click="initPrint">初始化实例</el-button>
        <el-button type="primary" @click="buttonOnClick(1)">测试打印</el-button>
        <el-button type="primary" @click="buttonOnClick(3)">测试</el-button>
        <el-button type="primary" @click="buttonOnClick(4)">测试</el-button>
        <el-button type="primary" @click="buttonOnClick(5)">测试</el-button>
        <el-button type="primary" @click="buttonOnClick(6)">测试</el-button>
        <el-button type="primary" @click="buttonOnClick(7)">测试</el-button>
        <el-button type="primary" @click="buttonOnClick(8)">测试</el-button>
        <el-button type="primary" @click="buttonOnClick(9)">测试</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-select v-model="a" @change="selectOnChange">
          <el-option
            v-for="item in prointDevice"
            :label="item.label"
            :value="item.value"
            :key="item.val"
          ></el-option>
        </el-select>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { getLodop } from "./LodopFuncs.js";

export default {
  data() {
    return {
      name: "黄金亮",
      lodop: null,
      a: 0 // 打印机 索引
    };
  },
  computed: {
    // 获取打印机列表
    prointDevice() {
      if (this.lodop) {
        const arr = [];
        const iCount = this.lodop.GET_PRINTER_COUNT();
        // console.log('打印机数量：', iCount);
        for (let i = 0; i < iCount; i++) {
          const strPName = this.lodop.GET_PRINTER_NAME(i);
          // console.log('打印机名称：', strPName);
          arr.push({
            value: i,
            label: strPName
          });
        }
        return arr;
      } else {
        return [
          {
            label: "未检测到打印机",
            value: 0
          }
        ];
      }
    }
  },
  mounted() {
    this.lodop = getLodop();
    console.log("打印cLodop实例：", this.lodop);
  },
  methods: {
    initPrint() {
      if (!this.lodop) {
        this.lodop = getLodop();
        console.log("打印cLodop实例：", this.lodop);
        this.lodop.SET_PRINT_MODE("AUTO_CLOSE_PREWINDOW", true); // 预览打印后自动关闭
      }
    },
    buttonOnClick(type) {
      const lodop = this.lodop;
      console.log("测试按钮被点击:", type);

      switch (type) {
        case 1:
          // 2100,2970 不要通过改变尺寸顺序来改变预览横纵，这样会导致视觉上是横向，单打印出结果是纵向纸横向数据。
          lodop.SET_PRINT_PAGESIZE(2, 0, 0, "A4");
          lodop.SET_SHOW_MODE("LANDSCAPE_DEFROTATED", true); // 横向打印的预览默认旋转90度（正向显示）默认false。
          lodop.ADD_PRINT_HTML(
            0,
            0,
            "100%",
            "100%",
            "<div style='height: 760px;background-color: red;' >你好世界</div>"
          );
          lodop.On_Return = function(taskId, value) {
            console.log("taskId:", taskId);
            console.log("value:", value);
          };
          lodop.PREVIEW();
          break;
        default:
          break;
      }
    },
    selectOnChange(type) {
      console.log("打印机类型：", type);
      // this.lodop.SET_PRINT_MODE("WINDOW_DEFPRINTER", type); // 又不生效啦- -。
      this.lodop.SET_PRINTER_INDEXA(type); // 设置成功后，未触发回调
      this.lodop.On_Return = (taskId, value) => {
        console.log("taskId:", taskId);
        console.log("value:", value);
        if (value === "ok") {
          this.$message({
            type: "success",
            message: "设置成功",
            showClose: true
          });
        } else {
          this.$message({
            type: "error",
            message: "设置失败",
            showClose: true
          });
        }
      };
    }
  }
};
</script>
<style scoped lang="scss"></style>
