<template id="">
    <div class="body_div">
        <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
            点我打开
        </el-button>

        <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false" :modal="false">
            <span>我来啦!</span>
        </el-drawer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userInfo: {
                nickName: "勾八波比",
                area: "苏州市",
                address: "江苏省苏州市吴中区吴中大道 1188 号"
            },
            drawer: false,
        }
    }

}
</script>
<style scoped>
.body_div {
    width: 100%;
    height: 100%;
    background-color: aliceblue;
    min-height: 100vh;
    perspective: 1500px;
    margin: 0;
    padding: 0;
}


</style>