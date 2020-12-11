<template>
  <div class="category-list-container">
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <div slot="header">
        <span>分类列表</span>
      </div>
      <!-- card body -->
      <el-table :data="tableData" border stripe style="width:100%">
        <el-table-column
          v-for="(col, index) in columns"
          :prop="col.prop"
          :key="index"
          :label="col.label"
        >
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              @click="$router.push(`/category/edit/${scope.row._id}`)"
              type="text"
              size="small"
              >编辑</el-button
            >
            <el-button type="text" size="small" @click="handleDel(scope.row)"
              >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { parseTime } from "@/utils";
export default {
  name: "CategoryList",
  data() {
    return {
      tableData: [],
      columns: [
        {
          prop: "_id",
          label: "ID",
        },
        {
          prop: "parent.name",
          label: "上级分类",
        },
        {
          prop: "name",
          label: "分类名称",
        },
      ],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.fetch();
      this.text();
    },
    text() {
      console.log(parseTime("1507619996523"));
    },
    async fetch() {
      const res = await this.$http.get(`categroies`);
      this.tableData = res.data || [];
    },
    async handleDel(row) {
      this.$confirm("此操作将永久删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async () => {
        await this.$http.delete(`categroies/${row._id}`);

        this.$message({
          type: "success",
          message: "删除成功!",
        });
        this.fetch();
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
