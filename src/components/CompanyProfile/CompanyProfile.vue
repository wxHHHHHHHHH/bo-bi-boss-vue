<template>
    <div class="div_body">

        <div class="navigation_bar">
            <logoDiv></logoDiv>
            <ol>
                <li :class="{ active: currentImage === 'introduction' }" @click="showImage('introduction')">集团介绍</li>
                <li :class="{ active: currentImage === 'vision' }" @click="showImage('vision')">集团愿景</li>
                <li :class="{ active: currentImage === 'activities' }" @click="showImage('activities')">集团活动</li>
                <li :class="{ active: currentImage === 'culture' }" @click="showImage('culture')">企业文化</li>
            </ol>
        </div>

        <div class="content">
            <div class="image" v-if="currentImage === 'introduction'">
                <el-image  :src="require('./images/company.jpg')" fit="fit" ></el-image>
            </div>
            <div class="image" v-if="currentImage === 'vision'">
                <el-image  :src="require('./images/集团愿景.jpg')" alt="Vision" fit="fit" ></el-image>
            </div>
            <div class="image" v-if="currentImage === 'activities'">
                <video playsinline  controls poster width="100%" height="100%" src="https://vip.123pan.cn/1833477021/gao_da/%E6%B5%8B%E8%AF%95%E8%A7%86%E9%A2%91.mp4"></video>
            </div>
            <div class="image" v-if="currentImage === 'culture'">
                <el-image  :src="require('./images/企业文化.jpg')" alt="Culture" fit="fit" ></el-image>
            </div>
        </div>
    </div>
</template>

<script>
import { Image } from 'element-ui';
import logoDiv from '../Logo.vue';
export default {
    components: {
        logoDiv
    },
    data(){
        return{
             currentImage:'introduction',
             url : 'images/company.jpg'
        }
    },
    methods:{
        showImage(imageName) {
            this.currentImage = imageName;  // 更新当前显示的图片
    }
    }
}
</script>

<style scoped>
@import url('./css/CompanyProfile.css');
</style>