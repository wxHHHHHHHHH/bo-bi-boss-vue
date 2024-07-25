<template>
    <div class="circle">
        <div class="content">
            <ol>
                <li v-for="item in listData" :key="item.id">
                    <div class="info">
                        <div class="avatar">
                            <el-avatar :src=item.avatar></el-avatar>
                        </div>
                        <div class="info_body">
                            <div class="nickName">
                                <a :href=item.goUserInfo>{{ item.nickName }}</a>
                            </div>
                            <div class="content">
                                <div class="text" v-if="item.text">{{ item.text }}</div>
                                <div class="media_data">
                                    <ol>
                                        <li v-for="meiti in item.meitis" :key="meiti.order"
                                            :style="getMediaStyle(item.meitis.length)">
                                            <el-image :src="meiti.smallUrl"
                                                :preview-src-list="meiti.bigUrl">
                                            </el-image>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            <div class="time">
                                <span class="span_left">{{ item.createTime }}</span>
                                <span class="span_right">··</span>
                            </div>
                            <div class="pinglun">
                                <ol>
                                    <li v-if="item.dianzan">
                                        <ol>
                                            <li v-for="user in item.users" :key="user.id">
                                                <a :href=item.goUserInfo>{{ user.nickName }}</a>
                                            </li>
                                        </ol>
                                    </li>
                                    <li v-for="pinlun in item.pinglun" :key="pinlun.id">
                                        <span v-if="pinlun.otherId">
                                            <a :href=pinlun.pinLunUserUrl>{{ pinlun.pinLunNickName }}</a>
                                            <span>"回复"</span>
                                            <a :href=pinlun.huifuUserUrl>{{ pinlun.huiFunNickName }}</a>
                                            <span>{{ pinlun.content }}</span>
                                        </span>
                                        <span v-else>
                                            <a :href=pinlun.pinLunUserUrl>{{ pinlun.pinLunNickName }}</a>
                                            <span>{{ pinlun.content }}</span>
                                        </span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </li>

            </ol>
        </div>
    </div>
</template>
  
  <script>

  
  export default {
    data() {
      return {
        listData:[
            {
                "id":1,
                "avatar":"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
                "createTime":"2024-07-25 16:48:59",
                "goUserInfo":"#",
                "nickName":"邪恶波比呀",
                "text":"今天是个好天气，处处好想你。",
                "meitis":[
                    {"smallUrl":"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png","bigUrl":["https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"]},
                    {"smallUrl":"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png","bigUrl":["https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"]},
                    {"smallUrl":"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png","bigUrl":["https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"]}
                        ],
                "dianzan":true,
                "users":[
                    {
                        "id":1,
                        "goUserInfo":"#",
                        "nickName":"高达波比呀"
                    },
                    {
                        "id":2,
                        "goUserInfo":"#",
                        "nickName":"熬夜波比呀"
                    }
                ],
                "pinglun":[
                    {
                        "id":1,
                        "otherId":2,
                        "pinLunUserUrl":"#",
                        "pinLunNickName":"高达波比呀",
                        "huifuUserUrl":"#",
                        "huiFunNickName":"邪恶波比呀",
                        "content":"今天天气看北京，暴转大雨，在转小雨，二转三转无踪影！！！"
                    }
                ]
            }
        ]
      };
    },
    methods: {
    
        getMediaStyle(numImages) {
            // 计算每个图片的宽度
        const widthPercentage = 80 / numImages;
            return {
                width: `${widthPercentage}%`
            };
        }
    }
  };
  </script>
  
  <style scoped>
    @import url("./css/User.css");


  </style>


  