<template>
    <div id="frb" class="freeB swiper-container swiper-container-initialized swiper-container-horizontal">
        <ul calss="swiper-wrapper">
            <li 
                calss="swiper-slide swiper-slide-active"
                v-for="banner in banners"
                :key="banner._id"
            >
                <img width="375" height="215" :src="banner.imgSrc" alt="">
            </li>
        </ul>
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
            console.log(res.data.data.object_list[0]._id);
            
            this.$nextTick(()=>{
                new Swiper("#frb",{

                })
            })
        })
    }
}
</script>

<style lang="scss">
    .swiper-container {
        width:375px;
        height: 215px;
        .swiper-slide{
            float:left;
        }
    }  
</style>