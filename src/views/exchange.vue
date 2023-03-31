<template>
    <div class="grid h-screen place-items-center">
        <div class="w-full">
            <Clock />
            <Employe class=""/>
        </div>
    </div>
</template>

<script>
import Clock from '../components/Clock.vue'
import Employe from '../components/Employe.vue'
    export default {
  components: { Employe, Clock },
        
    }
</script>

<style lang="scss" scoped>

</style>