<template>
    <div class="box">
        <span>这里是日常页面</span>
    </div>
</template>

<style scoped>
    @charset "utf-8";
    /*清除默认样式*/
    *{ margin: 0; padding: 0; }
    ul, ol{ list-style-type: none; }
    input, textarea, select, button { outline: none; background-color: transparent; border: none; }
    em, i{ font-style: normal; }
    a{ text-decoration: none; }
    /* 去掉图片下的间距 */
    img{ vertical-align: top; }
    /*清浮动*/
    .clearfix:after,.clearfix:before{ content: ''; display: table; }
    .clearfix:after{ clear: both; }

    .box{
        width:50vw;
        height: 50vh;
        background: yellow;
        float: right;
    }
</style>