<template>
  <nuxt-link
    :key="index"
    :to="image.content.full_slug"
    tag="li"
    class="thumbnail"
  >
    <div class="aspectRatioOutside cover" :class="ratio">
      <div class="aspectRatioInside">
        <img
          v-lazy="
            `${transformImage(
              image.content.content.thumbnail.filename,
              '1440x0'
            )}`
          "
          :data-srcset="
            `${transformImage(
              image.content.content.thumbnail.filename,
              '400x0'
            )} 400w, 
                 ${transformImage(
                   image.content.content.thumbnail.filename,
                   '800x0'
                 )} 800w, 
                 ${transformImage(
                   image.content.content.thumbnail.filename,
                   '1200x0'
                 )} 1200w,
                 ${transformImage(
                   image.content.content.thumbnail.filename,
                   '1600x0'
                 )} 1600w,
                 ${transformImage(
                   image.content.content.thumbnail.filename,
                   '2000x0'
                 )} 2000w`
          "
          class="lazy"
          :alt="image.content.content.thumbnail.name"
        />
      </div>
      <div class="thumbnail-Overlay">
        <div class="thumbnail-Overlay_Title">
          <h2>
            <span class="thumbnail-Title">{{
              image.content.content.title | upperCase
            }}</span
            >|<span class="thumbnail-Location">{{
              image.content.content.location
            }}</span>
          </h2>
        </div>
      </div>

      <div class="thumbnail-OverlayActive">
        <div
          class="thumbnail-OverlayActive_Title thumbnail-OverlayActive_TitleTop"
        >
          <h2>
            {{ image.content.content.title | upperCase }}
          </h2>
          <h2>
            {{ image.content.content.location }}
          </h2>
        </div>
        <ul class="thumbnail-OverlayActive_TagList">
          <li v-for="(tag, i) in image.content.tag_list" :key="i">
            <h2>{{ tag | upperCase }}</h2>
          </li>
        </ul>
        <div
          class="thumbnail-OverlayActive_Title thumbnail-OverlayActive_TitleBottom"
        >
          <h2>{{ image.content.content.title | upperCase }}</h2>
          <h2>
            {{ image.content.content.location }}
          </h2>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    index: Number,
    image: Object,
    ratio: String
  },
  mounted() {
    console.log("RATIO", this.ratio)
  },
  methods: {
    transformImage(image, option) {
      if (!image) return ""
      if (!option) return ""
      let imageService = "//img2.storyblok.com/"
      let pathOne = image.replace("https://a.storyblok.com", "")
      let pathTwo = pathOne.replace("//a.storyblok.com", "")
      return imageService + option + pathTwo
    }
  }
}
</script>

<style lang="sass">
.thumbnail
  &-Overlay
    position: absolute
    display: flex
    justify-content: center
    align-items: center
    top: 0
    left: 0
    width: 100%
    height: 100%
    opacity: 1
    &_Title
      span
        &:first-child
          margin-right: .66rem
        &:last-child
          margin-left: .66rem
  &-OverlayActive
    opacity: 0
    position: absolute
    display: flex
    justify-content: center
    align-items: center
    top: .5rem
    left: .5rem
    right: .5rem
    bottom: .5rem
    border: 1px solid white
    &_TagList
      display: flex
      flex-wrap: nowrap !important
      flex-direction: column !important
      align-items: center
      justify-content: flex-start
    &_Title
      position: absolute
      display: flex
      flex-direction: column
      align-items: center
      left: 50%
      transform: translateX(-50%)
      text-align: center
    &_TitleTop
      top: 5%
    &_TitleBottom
      bottom: 5%
      transform: translateX(-50%) rotate(180deg)
</style>
