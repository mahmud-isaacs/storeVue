<template lang="">
    <div>
        <h1>This is FetchingData</h1>
        {{$store.state.aboutMe}}
    </div>
</template>
<script>
export default {
    computed :{
        getAboutMe(){
         return this.$store.dispatch('getAboutMe')
        }
    },
    mounted() {
        this.getAboutMe
    },
}
</script>
<style lang="">
    
</style>