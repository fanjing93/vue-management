<template>
    <div class="container">
        <el-container class="outer-el-container">
            <el-header>
                <comHeader></comHeader>
            </el-header>
            <el-container class="inter-el-container">
                <el-aside>
                    <comAside :list="menu_list"></comAside>
                </el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import api from '../http/api';
    import comHeader from '../components/com_header';
    import comAside from '../components/com_aside';

    export default {
        components: {
            comHeader,
            comAside
        },
        data() {
            return {
                menu_list: []
            }
        },
        methods: {
            getShop() {
                this.$axios({
                    url: api.getShop,
                    method: 'get'
                }).then(res => {
                    if (res.code === 0 && res.data && res.data.length) {
                        localStorage.setItem('shop_id', res.data[0]['shop_id']);
                        this.loginShop();
                    } else if (res.data && !res.data.length) {
                        this.createShop();
                    } else if(res.code === 1007){
                        this.$router.push('/login');
                    }
                    this.$message.warning(res.msg);
                })
            },
            createShop() {
                this.$axios({
                    url: api.createShop,
                    method: 'post',
                    data: {shop_name: '默认店铺名称'}
                }).then(res => {
                    if (res.code === 0) {
                        this.getShop()
                    }
                });
            },
            loginShop() {
                this.$axios({
                    url: api.loginShop,
                    method: 'post'
                }).then(res => {
                    if (res.code === 0) {
                        localStorage.setItem('shop_id', res.data['shop_id']);
                        localStorage.setItem('admin_id', res.data['admin_id']);
                        localStorage.setItem('shop_name', res.data.shop_name);
                        localStorage.setItem('logo_url', res.data['logo_url']);
                        localStorage.setItem('domain', res.data['domain']);
                        this.getMenuList();
                    }
                })
            },
            getMenuList() {
                this.$axios({
                    url: api.getMenuList,
                    method: 'get'
                }).then(res => {
                    if (res.code === 0) {
                        this.menu_list = res.data;
                    }
                })
            }
        },
        created() {
            this.getShop();
        }
    }
</script>

<style scoped>
    .container, .outer-el-container {
        width: 100%;
        height: 100%;
    }

    .outer-el-container {
        display: flex;
        flex-direction: column;
    }

    .inter-el-container {
        flex: 1;
    }

    .el-header[data-v-57509004], .el-footer[data-v-57509004] {
        background-color: #fff;
        box-shadow: 0 0 12px 0 #e1e1e6;
        z-index: 3;
    }

    .el-aside[data-v-57509004] {
        background-color: #2e3234;
    }

    .el-aside[data-v-57509004] {
        width: 150px !important;
    }

    .el-main[data-v-57509004] {
        background-color: #fff;
    }

    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }
</style>
