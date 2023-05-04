<template>
    <div class="login-wrap">
        <div class="login">
            <div class="loginform">
                <ul class="tab clearFix">
                    <li>
                        <a href="##" style="border-right: 0;">扫描登录</a>
                    </li>
                    <li>
                        <a href="##" class="current">账户登录</a>
                    </li>
                </ul>

                <div class="content">
                    <form action="##">

                        <div class="input-text clearFix">
                            <i></i>
                            <input type="text" placeholder="手机号">
                            <span class="error-msg">错误提示信息</span>
                        </div>

                        <div class="input-text clearFix">
                            <i class="pwd"></i>
                            <input type="text" placeholder="请输入密码">
                            <span class="error-msg">错误提示信息</span>
                        </div>

                        <div class="setting clearFix">
                            <label class="checkbox inline">
                                <input name="m1" type="checkbox" value="2" checked="">
                                自动登录
                            </label>
                            <span class="forget">忘记密码？</span>
                        </div>
                        <button class="btn">登&nbsp;&nbsp;录</button>

                    </form>
                    <div class="call clearFix">
                        <ul>
                            <li><img src="./img/qq.png" alt=""></li>
                            <li><img src="./img/sina.png" alt=""></li>
                            <li><img src="./img/ali.png" alt=""></li>
                            <li><img src="./img/weixin.png" alt=""></li>
                        </ul>
                        <router-link to="/register" class="register">立即注册</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

</script>

<style scoped lang='scss' src="./Login.scss"></style>