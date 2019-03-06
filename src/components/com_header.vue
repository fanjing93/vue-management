<template>
    <div class="header-container">
        <div class="header-left">
            <img :src="logo_url"
                 alt=""
                 class="cursor-pointer"
                 @click="handleGoIndex">
            <div>
                <div class="header-left-text text-overflow-ellipsis">{{ shop_name }}</div>
                <div class="font-size-12 color-gray">{{ version_name }}</div>
            </div>
        </div>
        <div class="header-center">
            <slot></slot>
        </div>
        <div class="header-right">
            <span class="cursor-pointer"><a href="https://jinshuju.net/f/Pv9FVB" target="_blank" title="问题反馈">问题反馈</a></span>
            <span class="margin-left-10 margin-right-10">|</span>
            <span class="margin-right-10 cursor-pointer"><a href="https://wemart.kf5.com/hc/"    target="_blank" title="帮助中心">帮助中心</a></span>
            <span class="line-height-1 font-size-22 iconfont icon-gerenzhongxin1"></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "com-header",
        data() {
            return {
                shop_name: 'delu小店',
                version_name: '商务plus版',
                logo_url: 'http://imgcache1.qiniudn.com/112a9f03-2c37-1cb7-7dce-b565cca4?imageView2/2/w/35/h/35'
            }
        },
        methods: {
            handleGoIndex() {
                this.$router.push('/index');
            }
        }
    }
</script>

<style scoped lang="less">
    .header-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;

        .header-left {
            flex-basis: 130px;
            padding-right: 20px;
            display: flex;
            align-items: center;
            justify-content: center;

            &>div {
                align-items: flex-start;
                display: flex;
                flex-direction: column;
                padding-left: 10px;
                line-height: 1.4;
                flex: 1;

                .header-left-text {
                    text-align: left;
                    font-size: 14px;
                }
            }

        }

        .header-center {
            flex: 1;
        }

        .font-size-12 {
            font-size: 12px;
        }

        .font-size-22{
            font-size: 22px;
        }

        .color-gray {
            color: #939596;
        }

        .cursor-pointer {
            cursor: pointer;
        }

        .header-right {
            flex-basis: 250px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0;
            &>span {
                 font-size: 14px;
                 line-height: 1.4;
                &.iconfont{
                     font-size: 22px;
                     display: inline-block;
                     cursor: pointer;
                 }
             }

        }

    }

    .margin-left-10{
        margin-left: 10px;
    }
    .margin-right-10{
        margin-right: 10px;
    }

    .text-overflow-ellipsis {
        width: 100%;
        text-overflow: ellipsis;
        overflow-x: hidden;
        white-space: nowrap;
    }

    .text-overflow-ellipsis-1 {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    .text-overflow-ellipsis-2 {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

</style>