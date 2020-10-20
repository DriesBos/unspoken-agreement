<template>
  <div v-editable="story.content" class="page-BlogSingle">
    <div class="page-BlogSingle_Sidebar">
      <h1>{{ story.content.title }}</h1>
      <p>{{ story.content.description }}</p>
      <component
        :is="blok.component | dashify"
        v-for="blok in story.content.steps"
        :key="blok._uid"
        :blok="blok"
      ></component>
    </div>
    <div class="page-BlogSingle_Images">
      <ul class="page-BlogSingle_Images_ImageContainer">
        <li v-for="(image, i) in story.content.images" :key="i">
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
      <ul class="page-BlogSingle_Nav">
        <li>Previous Project</li>
        <li>Next Project</li>
        <li>View All Projects</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    let endpoint = "cdn/stories/projects/" + context.params.slug
    return context.app.$storyapi
      .get(endpoint, {
        version: process.env.NODE_ENV == "production" ? "published" : "draft"
      })
      .then(res => {
        return res.data
      })
      .catch(res => {
        if (!res.response) {
          console.error(res)
          context.error({
            statusCode: 404,
            message: "Failed to receive content from api"
          })
        } else {
          console.error(res.response.data)
          context.error({
            statusCode: res.response.status,
            message: res.response.data
          })
        }
      })
  },
  data() {
    return {
      story: { content: {} }
    }
  },
  mounted() {
    console.log("PROJECT SLUG", this.story)
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
  },
  head() {
    return {
      title: this.story.name + " — Unspoken Agreementgreement"
    }
  }
}
</script>

<style lang="sass">
.page
  &-BlogSingle
    display: flex
    &_Sidebar
      max-width: $width-sidebar
    &_Images
      flex-grow: 1
    &_Nav
      display: flex
</style>
