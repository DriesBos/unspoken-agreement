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
    return context.app.$storyapi
      .get("cdn/stories/client-portal/", {
        version: process.env.NODE_ENV == "production" ? "published" : "draft"
      })
      .then(res => {
        return res.data
      })
      .catch(res => {
        context.error({
          statusCode: res.response.status,
          message: res.response.data
        })
      })
  },
  data() {
    return {
      story: { content: {} }
    }
  },
  head() {
    return {
      title: this.story.name + " — Unspoken Agreement"
    }
  }
}
</script>
