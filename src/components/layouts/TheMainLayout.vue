<template>
   <div>
        <TheHeader/>
        <div class="container"> 
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import TheHeader from './TheHeader.vue'
export default {
    name: 'TheMainLayout',
    components:{ TheHeader}
}
</script>

