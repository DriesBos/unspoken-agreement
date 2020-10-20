<template>
  <div v-editable="blok" class="page-Project">
    <div class="page-Project_Sidebar">
      <h1>{{ blok.title }}</h1>
      <p>{{ blok.description }}</p>
      <component
        :is="blok.component | dashify"
        v-for="blok in blok.steps"
        :key="blok._uid"
        :blok="blok"
      ></component>
    </div>
    <div class="page-Project_Images">
      <ul class="page-Project_Images_ImageContainer">
        <li v-for="(image, i) in blok.images" :key="i">
          <img
            v-lazy="`${transformImage(image.filename, '1440x0')}`"
            :data-srcset="
              `${transformImage(image.filename, '400x0')} 400w, 
                 ${transformImage(image.filename, '800x0')} 800w, 
                 ${transformImage(image.filename, '1200x0')} 1200w,
                 ${transformImage(image.filename, '1600x0')} 1600w,
                 ${transformImage(image.filename, '2000x0')} 2000w`
            "
            class="lazy"
            :alt="image.name"
          />
        </li>
      </ul>
      <ul class="page-Project_Nav">
        <li>Previous Project</li>
        <li>Next Project</li>
        <li>View All Projects</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    console.log("PAGE PROJECT", this.blok)
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
.page
  &-Project
    display: flex
    &_Sidebar
      max-width: $width-sidebar
    &_Images
      flex-grow: 1
    &_Nav
      display: flex
</style>
