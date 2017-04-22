<style lang="stylus" rel="stylesheet/stylus">
    @import './../common/stylus/variable.styl';

</style>

<template lang="html">
    <div class="content-list-container">
        <p class="content-list-title">
            列表 - Javascript
        </p>
        <div class="content-box" v-for="article in articleList">
            <span class="content-tip">{{article.category}}</span>
            <div class="content-caption">{{article.name}}</div>
            <div class="content-abstract">{{article.abstract}}</div>
            <div class="content-sub-info">
                <span class="time">{{article.createTimeFormat}}</span>
                <span class="feature">
                    <span class="translated-block">译</span>
                    <span class="reprinted-block">转</span>
                    <span class="original-block">原</span>
                    <span class="href-block">链</span>
                    <span class="question-block">问</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {

        },
        created (){
            this._axios.get('/src/static/data/data.json').then((res) => {
                this.articleList = res.data.article_list;
                this.articleList.forEach(function(article){
                    article.createTimeFormat = new Date( Number(article.create_time) ).toLocaleDateString();
                });
            });
        },
        data () {
            return {
                articleList: []
            }
        },
        computed: {

        },
        methods: {

        },
        components: {

        }
    }
</script>