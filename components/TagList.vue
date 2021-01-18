<template>
  <div class="tagList">
    <ul ref="component" class="tagList-Container">
      <li v-for="(tag, i) in tagList" ref="tags" :key="i" class="tagList-Item">
        <h2>{{ tag | upperCase }}</h2>
      </li>
    </ul>
  </div>
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
    this.tagListAnimation()
  },
  methods: {
    updateCounter(number) {
      number = number + 1
      console.log(number)
    },
    tagListAnimation() {
      var target = this.$refs.component
      var tl = gsap.timeline({})
      tl.to(target, {
        yPercent: -100,
        ease: "linear",
        duration: 66
      })
      tl.pause()
      target.closest(".thumbnail").addEventListener("mouseover", () => {
        tl.play()
      })
      target.closest(".thumbnail").addEventListener("mouseout", () => {
        tl.restart()
        tl.pause()
      })
      console.log(target)
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
  &-Container
    overflow-y: auto
    overflow: visible
    h2
      text-align: center !important
  > li
    overflow: visible
    &:first-child
      margin-top: -.6em
</style>
