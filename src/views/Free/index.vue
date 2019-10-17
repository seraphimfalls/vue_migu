<template>
    <div class="free">
        <banner></banner>
        <div class="tit">
            <p>热门推荐（免费）</p>
        </div>
        <freemove></freemove>
        <div class="tit">
            <p>票房过亿的电影</p>
        </div>
        <freemove></freemove>
        <div class="tit">
            <p>豆瓣评分8.0+的电影</p>
        </div>
        <freemove></freemove>
        <div class="tit">
            <p>咪咕独播</p>
        </div>
        <freemove></freemove>
    </div>
</template>

<script>
import Swiper from "swiper"
import banner from "@/components/Banner"
import freemove from "@/components/Move"
export default {
    data(){
        return {
            tImg: []
        }
    },
    components:{
         banner, freemove
    },
    created() {
        
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
</style>