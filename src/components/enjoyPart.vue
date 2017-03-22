<script>

    export default {
        data () {
            return {

            }
        },
        created (){
            this.$store.dispatch('nav/setActiveAsync','enjoyPart')
        }
    }
</script>

<template>
    <div class="route-b">{{datum}}</div>
</template>

<style>
    .route-b{
        color: #ff0;
    }
</style>
