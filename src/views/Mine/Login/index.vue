<template>
    <div class="login">
        <!-- head-start -->
        <div class="l-head">
            <div class="back">
                <a href="javascript:history.back(-1)">
                    <i class="fa fa-angle-left"></i>
                </a>
            </div>
            <h1>登录</h1>
            <router-link to="register" class="r-btn">注册</router-link>
        </div>
        <!-- head-end -->
        <!-- center-start -->
        <div class="center">
            <div class="logo">
                <img src="@/assets/migu-video.png" alt="">
            </div>
            <div class="inputBox">
                <input type="text" placeholder="手机号/邮箱/用户名"> 
                <input type="password" placeholder="密码">
            </div>
            <input type="text" value="登录" class="btn">
        </div>
        <!-- center-end -->
        <!-- foot-start -->
            <div class="foot">
                <div class="forget">
                    <a>短信登录</a>  
                    <span>|</span>  
                    <a>忘记密码</a>  
                </div>
                <div class="moble">
                    <a href="">
                        <img src="@/assets/icon-pass.png" alt="">
                    </a>
                </div>
            </div>
        <!-- foot-end -->
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .login{
        width:100%;
        position:relative;
        .l-head{
            display:flex;
            justify-content: space-between;
            line-height: 2rem;
            border-bottom:1px #ccc solid;
            h1{
                font-size:1.125rem;
                font-weight: normal;
                text-align:center;
                margin-left:10px;
            }
            .r-btn{
                font-size: 0.9375rem;
                padding-right:5px;
            }
            .back{
                i{
                    font-size: 25px;
                    padding-left:5px;
                    margin-top:5px;
                }
            }
        }
        .center{
            width:100%;
            padding: 0 20px;
            text-align: center;
            img{
                width:138px;
                height:34px;
                margin:30px 118.5px;
            }
            .inputBox{
                padding: 0 0.625rem;
                input{
                    display:block;
                    width:100%;
                    height:1.5rem;
                    border:none;
                    font-size:1rem;
                    padding: 1.5rem 0;
                    border-bottom:1px solid #DBDDDF;
                    color:#DBDDDF;
                }
            }
            .btn{
                width:95%;
                height:2.75rem;
                line-height:2.75rem;
                border:none;
                font-size:1.125rem;
                color:#fff;
                border-radius: 1.4rem;
                background:#2E8FD7;
                text-align:center;
                margin-top:30px;
            }
        }
        .foot{
            width:100%;
            position: fixed;
            bottom:2rem;
            text-align:center;
            .forget{
                a{
                    font-size:0.9375rem;
                    line-height:1rem;
                    color:#2E8FD7;
                    margin: 0 0.5rem;
                }
                span{
                    font-size:0.9375rem;
                    line-height:1rem;
                    color:#2E8FD7;
                }
            }
            .moble{
                width:100%;
                padding-bottom: 1rem;
                text-align: center;
                margin-top:2rem;
                a{
                   display: inline-block;
                   width:1.875rem;
                   height:1.875rem;
                   padding-bottom:1rem;
                }
            }
        }
    }
</style>