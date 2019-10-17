<template>
   
        <div class="move swiper-container ">
            <ul class="swiper-wrapper vertical-pic clearfix">
                <li 
                    class="swiper-slide swiper-slide-active"
                    v-for="move in moves"
                    :key="move._id"
                >
                    <router-link 
                        :to="{name:'moviedetail', params:{movie: move}}"
                    >
                        <img width="100%" :src="move.imgSrc" alt="">
                        <span>{{move.name}}</span>
                        <span>{{move.LONG_NAME}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
</template>

<script>
import Swiper from "swiper"
export default {
    data(){
        return {
            moves:[]
        }
    },
    methods:{
        // getImages( _url ){
        //     if( _url !== undefined ){
        //     let _u = _url.substring( 7 );
        //     return 'https://images.weserv.nl/?url=' + _u;
        //     }
        // }
    },
    created(){
        this.$http.get("/api/migu/zhengzaishoupiao").then(res=>{ // /api/db/in_theaters
            this.moves = res.data.data.object_list
            this.$nextTick(()=>{
                new Swiper(".move",{
                    slidesPerView: 3,
                    slidesPerGroup : 1,
                    spaceBetween: 30,
                    width:350,
                })
            })

        })
    }
}
</script>

<style lang="scss">
    .swiper-container {
        span{
            display:block;
            line-height:1.7em;
            font-size:12px;
            color:#666;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding:0 12px;
        }
    }  
    
</style>