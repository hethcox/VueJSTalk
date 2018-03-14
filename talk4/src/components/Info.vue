<template>
  <div class="info">
    <h1>{{ message }}</h1>
    <Locations />
  </div>
</template>

<script>
import Locations from '@/components/Locations'
import {mapGetters} from 'vuex'

export default {
  name: 'Info',
  mixins: [],
  extends: {},
  props: {},
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters('map', ['zipcode']),

    message () {
      return this.zipcode ? `${this.zipcode}` : 'I need a zipcode, please!'
    }
  },
  components: {Locations},
  watch: {},
  methods: {},
  beforeCreate () {},
  mounted () {}
}
</script>

<style lang="css" scoped>
  .info{
    color: #fff;
  }

  .info h1{font-weight: 300}
</style>
