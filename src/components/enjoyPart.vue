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

</template>

<style>
    .route-b{
        color: #ff0;
    }
</style>
