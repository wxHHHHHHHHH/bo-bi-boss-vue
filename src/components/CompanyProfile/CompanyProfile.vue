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
                <el-carousel type="card" height="500px" with="1000px" :autoplay=false >
                <el-carousel-item   el-carousel-item v-for="(item,index) in this.listData" :key="index" >
                    <h1>{{ item.title }}</h1>
                    <div class="card_content">{{ item.content }}</div>
                    <div class="video">
                        <video playsinline controls width="500px" height="200px" :src=item.src  @mouseover="showControls" @mouseout="hideControls" :controls="showingControls">

                        </video>
                    </div>
                </el-carousel-item>
            </el-carousel>
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
             url : 'images/company.jpg',
             listData:[
                {
                    id:1,
                    title:"标题文字",
                    content:'小学，甚至初中，没有真正的学业落后，也不存在绝对的成绩优秀，一切都是可逆转的。使情况发生逆转的神奇力量就是 课外阅读。1.生活如酒，或芳香，或浓烈，因为诚实，它变得醇厚；生活如歌，或高昂，或低沉，因为守信，它变得悦耳；生活如画，或明丽，或素雅，因为诚信，它变得美丽。2.若能掬起一捧月光，我选择最柔和的；若能采来香山红叶，我选择最艳丽的；若能摘下满天星辰，我选择最明亮的。也许你会说，我的选择不是最好，但我的选择，我相信。3.清代张潮《出梦影》中有言：“菊以渊明为知己，梅以和靖为知己，竹以子猷（yǒu）为知己。”当面对大海；面对着这片蔚蓝；我不禁想到：海以何人为知己呢？4.选择是难的，更何况是心灵的选择。高渐离为了荆轲，他选择了死；马本斋的母亲为了革命，她选择了牺牲；祝英台为了真挚的爱情，她选择了化蝶。在这友情.亲情与爱情之间的选择，他们是这样做的——5.在蝶的眼中，花是天使，因为花给予她生命的甘露在花的眼中，蜂是挚友，因为蜂给予她生命的延续。6.小桥流水。亭台楼阁，掩映其中。',
                    src:"http://47.120.49.135:8089/group1/M00/00/00/rBCNK2afg1mAO2B-OECQ2raRz3g108.mp4"
                },{
                    id:1,
                    title:"标题文字",
                    content:'小学，甚至初中，没有真正的学业落后，也不存在绝对的成绩优秀，一切都是可逆转的。使情况发生逆转的神奇力量就是 课外阅读。1.生活如酒，或芳香，或浓烈，因为诚实，它变得醇厚；生活如歌，或高昂，或低沉，因为守信，它变得悦耳；生活如画，或明丽，或素雅，因为诚信，它变得美丽。2.若能掬起一捧月光，我选择最柔和的；若能采来香山红叶，我选择最艳丽的；若能摘下满天星辰，我选择最明亮的。也许你会说，我的选择不是最好，但我的选择，我相信。3.清代张潮《出梦影》中有言：“菊以渊明为知己，梅以和靖为知己，竹以子猷（yǒu）为知己。”当面对大海；面对着这片蔚蓝；我不禁想到：海以何人为知己呢？4.选择是难的，更何况是心灵的选择。高渐离为了荆轲，他选择了死；马本斋的母亲为了革命，她选择了牺牲；祝英台为了真挚的爱情，她选择了化蝶。在这友情.亲情与爱情之间的选择，他们是这样做的——5.在蝶的眼中，花是天使，因为花给予她生命的甘露在花的眼中，蜂是挚友，因为蜂给予她生命的延续。6.小桥流水。亭台楼阁，掩映其中。',
                    src:"https://vip.123pan.cn/1833477021/gao_da/%E6%B5%8B%E8%AF%95%E8%A7%86%E9%A2%91.mp4"
                },{
                    id:1,
                    title:"标题文字",
                    content:'小学，甚至初中，没有真正的学业落后，也不存在绝对的成绩优秀，一切都是可逆转的。使情况发生逆转的神奇力量就是 课外阅读。1.生活如酒，或芳香，或浓烈，因为诚实，它变得醇厚；生活如歌，或高昂，或低沉，因为守信，它变得悦耳；生活如画，或明丽，或素雅，因为诚信，它变得美丽。2.若能掬起一捧月光，我选择最柔和的；若能采来香山红叶，我选择最艳丽的；若能摘下满天星辰，我选择最明亮的。也许你会说，我的选择不是最好，但我的选择，我相信。3.清代张潮《出梦影》中有言：“菊以渊明为知己，梅以和靖为知己，竹以子猷（yǒu）为知己。”当面对大海；面对着这片蔚蓝；我不禁想到：海以何人为知己呢？4.选择是难的，更何况是心灵的选择。高渐离为了荆轲，他选择了死；马本斋的母亲为了革命，她选择了牺牲；祝英台为了真挚的爱情，她选择了化蝶。在这友情.亲情与爱情之间的选择，他们是这样做的——5.在蝶的眼中，花是天使，因为花给予她生命的甘露在花的眼中，蜂是挚友，因为蜂给予她生命的延续。6.小桥流水。亭台楼阁，掩映其中。',
                    src:"https://vip.123pan.cn/1833477021/gao_da/%E6%B5%8B%E8%AF%95%E8%A7%86%E9%A2%91.mp4"
                }
            ],
            showingControls: null,
        }
    },
    methods: {
        showImage(imageName) {
            this.currentImage = imageName;  // 更新当前显示的图片
        },
        showControls() {
            this.showingControls = true;
        },
        hideControls() {
            this.showingControls = false;
        },
    }
}
</script>

<style scoped>
@import url('./css/CompanyProfile.css');
</style>