<template>
    <div class="goBackBox">
        <div class="goBack">
            <i class="fa fa-chevron-left"></i>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isShow: false
        }
    },
    methods: {
        goback(){
            window.history.back(-1);
        }
    }

}
</script>

<style lang="scss">
    .goBack{
        width:20px;
        height: 20px;
        position:absolute;
        top:10px;
        left:10px;
        z-index: 100;
        border-radius: 50%;
        background: #ccc;
        text-align: center;
        line-height: 20px;
        .fa-chevron-left{
            color:#fff;
            font-size:18px;
            margin-left: -2px;
        }
    }
</style>