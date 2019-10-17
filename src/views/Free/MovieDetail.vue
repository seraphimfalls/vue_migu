<template>
    <div>
        <div class="loading" v-if="!mine">    </div>
        <div v-else class="moviedetail" >
            <goback></goback>
            <div class="bigImg">
                <img v-lazy="movie.imgSrc" alt="">
            </div>
            <div class="introduce">
                <div class="smallImg">
                    <img v-lazy="movie.imgSrc" alt="">
                </div>
                <div class="detail">
                    <span class="terget name">{{movie.name}}</span>
                    <span class="terget miguScore">评分： {{movie.miguScore}}分</span>
                    <span class="terget director">导演：{{director}}</span>
                </div>
            </div>
            <div class="msg">
                {{movie.Detail}}
            </div>
            <div class="performerBox">
                <div class="tit">
                    <p>演员表</p>
                </div>
                <div class="performer swiper-container">
                    <ul class="swiper-wrapper vertical-pic clearfix">
                        <li
                            class="swiper-slide swiper-slide-active"
                            v-for="performer in performers.star"
                            :key="performer.starid"
                        >
                            <div>
                                <img class="acter" :src="performer.imgSrc" alt="">
                                <span>{{performer.name}}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>

</template>

<script>
import goback from "@/components/GoBack"
export default {
    data(){
        return {
            movie: null,
            director: null,
            performers: null,
            mine: null
        }
    },
    components:{
        goback
    },
    created() {
        this.movie = this.$route.params.movie
        this.$http.get("/api/migu/yanyuan").then(res=>{
            this.mine = res.data.data.object_list
            this.director = res.data.data.object_list[0].star[0].name
            this.performers = res.data.data.object_list[1] 
        })
    },
}
</script>

<style lang="scss">
    .bigImg{
        width:100%;
        height:220px;
        img{
            position: relative;
            width:100%;
            top:-260px;
            left:-15px;
        }
    }
    .introduce{
        width:375px;
        overflow: hidden;
        position:relative;
        top:-40px;
        z-index: 10;
        .smallImg{
            height:144px;
            float: left;
            img{
                height:100%;
            }
        }
        .detail{
            position: relative;
            z-index:11;
            float: left;
            color:#fff;
            padding-left:10px;
            span{
                display: block;
                padding:5px 0;
            }
            .terget{
                position: relative;
                bottom:-10px;
                font-size:18px;
            }
            .miguScore{
                color:#F8B246;
                font-size:14px;
            }
            .director{
                color: #000;
                font-size:14px;
                margin-top:10px;
            }
        }
    }
    .msg{
        padding:0 5px;
        color:#666;
        font-size:14px;
        margin-top:-20px;
    }
    .tit{
        p{
            height: 45px;
            background:url("http://movie.miguvideo.com/lovev/miguMovie/images/icon/module-icon.png") no-repeat 0 11px;;
            background-size: 3px 23px;
            padding:0 12px 0 8px;
            line-height:45px;
        }
    }
    .acter{
        width:100px;
        height:100px;
    }
</style>