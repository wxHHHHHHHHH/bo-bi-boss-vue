<template>
    <div class="staff_body">
        <div class="title">
            <span>集团成员</span>
        </div>
        <div class="staff_info">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="nickName" label="昵称" width="180">
                </el-table-column>
                <el-table-column prop="nickName" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="position" label="籍贯">
                </el-table-column>
                <el-table-column prop="createTime" label="加入时间">
                </el-table-column>
                <el-table-column prop="position" label="职位" width="100">
                    <template slot-scope="scope">
                        <el-tag :type="scope.row.tag === 'ceo' ? 'primary' : 'success'" disable-transitions>{{
                            scope.row.tag }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                        <el-button type="text" size="small">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="block">
                <el-pagination layout="prev, pager, next" :total="totalItems"
      :current-page.sync="currentPage"
      @current-change="handleCurrentChange" >
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<style scoped>
    @import url('./css/Staff.css');
</style>
<script>
export default {
    data() {
        return {
            tableData: [],
            currentPage: 1,
            totalItems: 0,
            pageSize:6
        }
    },
    methods: {
        handleCurrentChange(page) {
            this.currentPage = page;
        },
        getUserInfo() {
            const findUserParam = {
                pageNo: this.currentPage,
                pageSize: this.pageSize
            }
            this.$http.findUser(findUserParam).then(res => {
                this.tableData = res.list
                this.currentPage = res.pageNum
                this.totalItems = res.total
            }).catch(error => {
                // 登录失败，弹出友好提示
                this.$message.error(error)
                // 或者使用其他提示方式，比如模态框、消息通知等
            });
        }

    },
    mounted() {
        this.getUserInfo()
    }
}
</script>