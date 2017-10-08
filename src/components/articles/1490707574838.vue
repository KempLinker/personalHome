
<template>
    <div>
        <p>蝉时雨 化成淡墨渲染暮色</p>
        <p>渗透着 勾勒出足迹与车辙</p>
        <pre>
        <code>
created (){
    this._axios.get('src/static/data/css_article.json').then((res) => {
        var articleList = this.articleList;
    });
});
        </code>
            </pre>
    </div>
</template>


