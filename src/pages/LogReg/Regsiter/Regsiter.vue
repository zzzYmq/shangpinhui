<template>
    <div class="register">
        <h3>注册新用户
            <span class="go">我有账号，去 <router-link to="/login">登录</router-link>
            </span>
        </h3>
        <div class="content">
            <label>手机号:</label>
            <input v-model="registerForm.phone" type="text" placeholder="请输入你的手机号">
            <span class="error-msg">错误提示信息</span>
        </div>
        <div class="content">
            <label>验证码:</label>
            <input v-model="registerForm.code" type="text" placeholder="请输入验证码">
            <button class="msgbtn" :disabled="isSending" :class="isSending ? 'active' : ''" @click="sendMsg">{{
                message
            }}</button>
            <span class="error-msg">错误提示信息</span>
        </div>
        <div class="content">
            <label>登录密码:</label>
            <input v-model="registerForm.password" type="password" placeholder="请输入你的登录密码">
            <span class="error-msg">错误提示信息</span>
        </div>
        <div class="content">
            <label>确认密码:</label>
            <input v-model="registerForm.confirm" type="password" placeholder="请输入确认密码">
            <span class="error-msg">错误提示信息</span>
        </div>
        <div class="controls">
            <input name="m1" type="checkbox" v-model="registerForm.checked">
            <span>同意协议并注册《尚品汇用户协议》</span>
            <span class="error-msg">错误提示信息</span>
        </div>
        <div class="btn">
            <button @click="registe">完成注册</button>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { getCode, submitRegForm } from '@/utils/request/register.js'
import { useSendState } from '@/hooks/sendState.js'

const { isSending, message, changeSendState } = useSendState(30)
const registerForm = reactive({
    phone: "",
    password: '',
    code: '',
    confirm: '',
    checked: false
})

const sendMsg = async () => {
    if (registerForm.phone) {
        changeSendState()
        const data = await getCode(registerForm.phone)
        // alert(`你的验证码是${data}，有效时长5分钟！`)
        console.log(data);
    } else {
        alert("请输入手机号！")
    }
}

const registe = async () => {
    const { phone, password, confirm, checked, code } = registerForm
    if (password !== confirm) {
        alert("输入的密码不一致！")
        return;
    } else if (!code) {
        alert("请输入验证码！")
        return;
    } else if (!checked) {
        alert("请勾选用户协议！")
        return;
    }
    const data = await submitRegForm({ phone, password, code })
    if (data.code !== 200) {
        alert(data.message)
        return;
    }
    alert("注册成功！")
    console.log(data);
}

</script>

<style scoped lang='scss' src="./Register.scss"></style>