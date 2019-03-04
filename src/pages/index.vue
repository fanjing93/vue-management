<template>
    <div class="container">
        <el-container class="outer-el-container">
            <el-header>Header</el-header>
            <el-container class="inter-el-container">
                <el-aside width="200px">Aside</el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="less" scoped>
    .container,.outer-el-container{
        width: 100%;
        height: 100%;
    }

    .outer-el-container{
        display: flex;
        flex-direction: column;
    }

    .inter-el-container{
        flex: 1;
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