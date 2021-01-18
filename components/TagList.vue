<template>
  <ul ref="component" class="tagList" r>
    <li v-for="(tag, i) in tagList" ref="tags" :key="i" class="tagList-Item">
      <h2>{{ tag | upperCase }}</h2>
    </li>
  </ul>
</template>

<script>
import { gsap } from "gsap"

export default {
  props: {
    list: Array
  },
  data() {
    return {
      tagList: [],
      number: 1
    }
  },
  mounted() {
    this.sortTagList()
    // this.tagListAnimation()
  },
  methods: {
    updateCounter(number) {
      number = number + 1
      console.log(number)
    },
    tagListAnimation() {
      var target = this.$refs.component
      // var repeat = tl.repeat() || 0
      var tl = gsap.timeline().to(target, {
        y: -(1 * 10),
        ease: "power2.out",
        duration: 1,
        delay: 1,
        repeat: -1
      })
      tl.play()
      console.log(tl.repeat)
    },
    sortTagList() {
      var array = [
        ...this.list,
        ...this.list,
        ...this.list,
        ...this.list,
        ...this.list,
        ...this.list,
        ...this.list,
        ...this.list,
        ...this.list,
        ...this.list,
        ...this.list,
        ...this.list
      ]
      this.tagList = array
    }
  }
}
</script>

<style lang="sass">
.tagList
  display: flex
  flex-wrap: nowrap
  flex-direction: column
  align-items: center
  overflow: hidden
  > li
    &:first-child
      margin-top: -.6em
</style>
