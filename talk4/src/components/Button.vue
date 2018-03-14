<template lang="html">
  <button class="button" :class="{'is-active' : active}" @click.prevent="active = !active"><span class="toggler"></span></button>
</template>

<script>
export default {
  name: 'Button',
  mixins: [],
  extends: {},
  props: [],
  data () {
    return {
      active: false
    }
  },
  computed: {},
  components: {},
  watch: {},
  methods: {},
  beforeCreate () {},
  created () {}
}
</script>

<style lang="css" scoped>
  .button{
    align-items: center;
    background: #fff;
    bottom: 20px;
    border-radius: 25px;
    box-shadow: 0 0 4px rgba(0,0,0,.8);
    display: flex;
    position: fixed;
    right: 20px;
    height: 25px;
    width: 48px;
    z-index: 50;
  }

  button.is-active .toggler{
    background: #2c3e50;
    left: 22px;
  }

  .toggler{
    background: #ccc;
    border-radius: 100%;
    display: block;
    left: 1px;
    position: relative;
    height: 21px;
    transition: all .2s ease;
    width: 23px;
  }
</style>
