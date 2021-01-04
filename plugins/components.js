import Vue from "vue"

// PAGES
import Page from "~/components/Page.vue"
import PageClient from "~/components/PageClient.vue"
import PageClientPortal from "~/components/PageClientPortal.vue"
import PageProject from "~/components/PageProject.vue"
import PageProjects from "~/components/PageProjects.vue"
import PageStudio from "~/components/PageStudio.vue"

// ITEMS
import ItemImages from "~/components/ItemImages.vue"
import ItemStep from "~/components/ItemStep.vue"

// PAGES
Vue.component("blok-page", Page)
Vue.component("blok-page-client", PageClient)
Vue.component("blok-page-client-portal", PageClientPortal)
Vue.component("blok-page-project", PageProject)
Vue.component("blok-page-projects", PageProjects)
Vue.component("blok-page-studio", PageStudio)

// ITEMS
Vue.component("blok-item-images", ItemImages)
Vue.component("blok-item-step", ItemStep)
