<template>
    <div>
        <el-form :model="form" :rules="rules"
                 status-icon
                 ref="form"
                 label-position="left"
                 label-width="0px"
                 class="demo-ruleForm login-page">
            <h3 class="title">系统登录</h3>
            <el-form-item prop="username">
                <el-input type="text"
                          v-model="form.username"
                          auto-complete="off"
                          placeholder="用户名"
                ></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password"
                          v-model="form.password"
                          auto-complete="off"
                          placeholder="密码"
                ></el-input>
            </el-form-item>
            <el-checkbox
                    v-model="form.remember"
                    class="rememberme"
            >记住密码
            </el-checkbox>
            <el-form-item style="width:100%;">
                <el-button :plain="true" type="primary" style="width:100%;" @click="handleSubmit" :loading="loading">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import https from '../https.js';
    import { setCookie } from "../utils/index";

    export default {
        name: "login",
        data() {
            return {
                form: {
                    username: '',
                    password: '',
                    remember: 0
                },
                loading: false,
                rules: {
                    username: [{required: true, message: 'please enter your account', trigger: 'blur'}],
                    password: [{required: true, message: 'enter your password', trigger: 'blur'}]
                },
            }
        },
        methods: {
            handleSubmit(event) {
                this.form.remember = Boolean(this.form.remember);
                this.$refs.form.validate(valid => {
                    if (valid) {
                        this.loading = true;
                        https.post('/api/v1/user/auth/login/create', this.form).then(res => {
                            this.loading = false;
                            if(res.code === 0){
                                this.$message({
                                    message: res.msg,
                                    type: 'success'
                                });
                                setCookie('token', res.data.token);
                                this.$router.push('/index');
                            }else{
                                this.$message.error(res.msg);
                            }
                        });
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .login-container {
        width: 100%;
        height: 100%;
    }

    .title {
        text-align: center;
        line-height: 4;
    }

    .login-page {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        margin: 180px auto;
        width: 350px;
        padding: 35px 35px 15px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }

    label.el-checkbox.rememberme {
        margin: 0px 0px 15px;
        text-align: left;
    }
</style>