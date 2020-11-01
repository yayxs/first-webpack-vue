<template>
  <div>
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <div slot="header">
        <span>{{ id ? "编辑" : "新建" }}分类</span>
      </div>
      <!-- card body -->
      <el-form
        :model="formModel"
        ref="formDomRef"
        :rules="rules"
        label-width="80px"
        :inline="false"
        size="normal"
      >
        <el-form-item label="名称">
          <el-input v-model="formModel.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "CategroyCreate",
  props: {
    id: {},
  },
  data() {
    return {
      formModel: {
        name: "",
      },
      rules: {},
    };
  },
  mounted() {
    this.id && this.fetch();
  },
  methods: {
    async onSubmit() {
      const { status } = this.id
        ? await this.$http.put(`categroies/${this.id}`, this.formModel)
        : await this.$http.post(`categroies/add`, this.formModel);
      if (status === 200) {
        this.$message({
          message: "新建成功",
          type: "success",
        });
        this.$router.push(`/category/list`);
      }
    },
    async fetch() {
      const res = await this.$http.get(`/categroies/${this.id}`);
      this.formModel = res.data;
    },
  },
};
</script>

<style lang="scss" scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
