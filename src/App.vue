<template>
   <div id="micro-app-crm">
     <router-view :key="(new Date()).getTime()" />
   </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>

</style>
