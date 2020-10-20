<template>
  <component
    :is="story.content.component | dashify"
    v-if="story.content.component"
    :key="story.content._uid"
    :blok="story.content"
  ></component>
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
  head() {
    return {
      title: this.story.name + " — Unspoken Agreementgreement"
    }
  }
}
</script>
