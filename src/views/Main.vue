<template>
  <div>
    <div>
      i am crm app Main   FUCK!
    </div>
    <div v-for="(item) in menus" :key="item.k">
      <router-link :to="item.route">
        {{item.title}}
      </router-link>
    </div>
    <router-view :key="(new Date()).getTime()" />
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'AppCrmMain',
  beforeRouteEnter (to, from, next) {
    next(vm => {
      return true
    })
  },
  beforeRouteLeave (to, from, next) {
    next()
  },
  components: {},
  mixins: [],
  props: {},
  watch: {},
  computed: {},
  data () {
    return {
      menus: [
        {
          key: 'vue',
          route: '/home',
          title: 'Home'
        },
        {
          key: 'vue-list',
          route: '/about',
          title: 'About'
        }
      ]
    }
  },
  methods: {
    test () {
      return false
    }
  },
  created () {},
  mounted () {
    console.log('app   children crm', _.isFunction(this.test))
  },
  beforeDestroy () {
    console.log('main beforeDestroy')
  }
}
</script>
<style lang="scss" scoped>
</style>
