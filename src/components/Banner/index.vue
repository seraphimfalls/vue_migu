<template>
        <div class="banner swiper-container">
            <div class="swiper-wrapper">
                <div 
                    class="swiper-slide swiper-slide-active"
                    v-for="banner in banners"
                    :key="banner.id"
                >
                    <img width="100%" :src="banner.imgSrc" alt="">
                    
                </div>    
            </div>
        </div>
       
</template>

<script>
import Swiper from "swiper"
export default {
    data(){
        return {
            banners:[]
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
        this.$http.get("/api/migu/mianfeibanner").then(res=>{ ///api/db/in_theaters
            this.banners = res.data.data.object_list
            this.$nextTick(()=>{
                new Swiper(".banner",{
                    
                })
            })
        })
    }
}
</script>

<style lang="scss">
    .swiper-slide{
            width: 130px;
            .ft14{
            width: 130px;
            height: 23px;
            font-size: 14px;
            padding: 0 12px;
            color: #666;
            }
            .ft13{
                width: 130px;
                height: 22px;
                font-size: 13px;
                padding: 0 12px;
                color: #999;
            }
        }
</style>