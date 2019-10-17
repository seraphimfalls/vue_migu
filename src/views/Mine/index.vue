<template>
    <div class="mine">
        <div class="title">
            我的
            <i class="fa fa-gear"></i>
        </div>
        <router-view></router-view>
        <router-link 
            to="login"
            class="loginBox"
            tag="div"
        >
            <img src="@/assets/defaultPhoto.png" alt="">
            <p>点击登录</p>
            <div class="past">
                <i class="fa fa-angle-right"></i>
            </div>
        </router-link>
        <div class="userOrder or">
            <router-link 
                to=""
                tag="div"
                class="my-list line"
            >
                <img src="@/assets/order.png" alt="">
                <p>我的订单</p>
                <div class="past">
                    <i class="fa fa-angle-right"></i>
                </div>
            </router-link>
            <router-link 
                to=""
                tag="div"
                class="my-list "
            >
                <img src="@/assets/wallet.png" alt="">
                <p>我的钱包</p>
                <div class="past">
                    <i class="fa fa-angle-right"></i>
                </div>
            </router-link>
        </div>
        <div class="helpCenter or">
            <router-link 
                to=""
                tag="div"
                class="my-list line"
            >
                <img src="@/assets/question.png" alt="">
                <p>常见问题</p>
                <div class="past">
                    <i class="fa fa-angle-right"></i>
                </div>
            </router-link>
            <router-link 
                to=""
                tag="div"
                class="my-list "
            >
                <img src="@/assets/serv-online.png" alt="">
                <p>在线客服</p>
                <div class="past">
                    <i class="fa fa-angle-right"></i>
                </div>
            </router-link>
        </div>
        <div class="userOrder or">
            <router-link 
                to=""
                tag="div"
                class="my-list line"
            >
                <img src="@/assets/shopping.png" alt="">
                <p>商城</p>
                <div class="past">
                    <i class="fa fa-angle-right"></i>
                </div>
            </router-link>
            <router-link 
                to=""
                tag="div"
                class="my-list line"
            >
                <img src="@/assets/949.png" alt="">
                <p>约票</p>
                <div class="past">
                    <i class="fa fa-angle-right"></i>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .mine{
        background:#fff;
        .title{
            text-align:center;
            padding:10px;
            font-size:18px;
            color:#333;
            border-bottom:1px solid #f0f0f0;
            .fa-gear{
                float:right;
                width:24px;
                height:24px;
                font-size:24px;
            }
        }
        .loginBox{
            display: flex;
            padding:20px 10px;
            width:100%;
            align-items: center;
            position: relative;
            img{
                width:56px;
                height:56px;
            }
            p{
                width:49.8%;
                padding: 0 0 0 10px;
                font-size:16px;
            }
            .past{
                position: absolute;
                right:10px;
                padding: 19px 0;
                text-align: right;
                .fa-angle-right{
                    float:right;
                    font-size:18px;
                }
            }
        }
    }
    .or{
        font-size:15px;
        position: relative;
        .my-list{
            width:95%;
            padding:10px;
            margin:0 10px;
            display: flex;
            align-items: center;
            img{
                width:16px;
                height:16px;
            }
            p{
                width:49.8%;
                padding-left:10px;
                font-size:16px;
            }
            .past{
                position: absolute;
                right:10px;
                padding: 19px 0;
                text-align: right;
                .fa-angle-right{
                    float:right;
                    font-size:18px;
                }
            }
            
        }
    }
    .line{
            border-bottom:1px solid #dbdbdb;
        }
</style>