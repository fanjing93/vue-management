<template>
    <ul class="menu-list">
        <li class="menu-list-item" v-for="(item, index) in currentList">
            <span class="iconfont" :class="item.icon"></span>
            {{ item.name }}
        </li>
    </ul>
</template>

<script>
    export default {
        name: "comAside",
        props: {
            list: {
                type: Array
            }
        },
        data() {
            return {
                listIcon: [{
                    icon: 'icon-shangpinguanli1',
                    path: '/goods'
                }, {
                    icon: 'icon-hulianwangyingxiao-',
                    path: '/plugins/promotion'
                }]
            }
        },
        computed: {
            currentList() {
                let currentList = [];
                this.list.map(item => {
                    this.listIcon.map(icon => {
                        item.path === icon.path && (item['icon'] = icon['icon']);
                    });
                    currentList.push(item);
                });
                return currentList;
            }
        }
    }
</script>

<style scoped>
    .menu-list {
        color: #F7F9FB;
        padding-top: 10px;
    }
    .menu-list-item {
        padding: 10px 0;
        line-height: 1.2;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
