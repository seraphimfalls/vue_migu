<template>
    <div class="home">
        <router-view></router-view>
        <div class="tit">
            <p>正在售票</p>
            <Move></Move>
        </div>
        <div class="tit btm">
            <p>精彩活动</p>
            <div class="actI swiper-container">
                <ul class="swiper-wrapper vertical-pic clearfix">
                    <li 
                        class="swiper-slide swiper-slide-active"
                        v-for="act in acts"
                        :key="act._id"
                    >
                        <img class="actImg" v-lazy="act.imgSrc" alt="">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Move from "@/components/Move"
import banner from "@/components/Banner"
export default {
    components: {
        Move, banner
    },
    data(){
        return {
            acts: {}
        }
    },
    created() {
        this.$http.get("/api/migu/jingcaihuodong").then(res=>{
            this.acts = res.data.data.object_list
            this.$nextTick(()=>{
                new Swiper(".actI", {
                })
            })
        })
    },
}
</script>

<style lang="scss">
    .tit{
        p{
            height: 45px;
            background:url("http://movie.miguvideo.com/lovev/miguMovie/images/icon/module-icon.png") no-repeat 0 11px;;
            background-size: 3px 23px;
            padding:0 12px 0 8px;
            line-height:45px;
        }
    }
    .swiper-slide .actImg{
        width:100%;
        height:140px;
    }
    /* .btm{
        position:absolute;
        bottom:0;
    } */
</style>