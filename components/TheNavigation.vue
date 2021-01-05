<template>
  <div class="navigation">
    <div class="mobile navigation-Mobile">
      <TheStudio />
    </div>
    <div class="navigation-Nav navigation-Nav_Top" :class="{ active: nav }">
      <ul class="navigation-Nav_List">
        <nuxt-link class="navigation-Nav_ListItem" to="/studio" tag="li"
          >Studio</nuxt-link
        >
        <nuxt-link class="navigation-Nav_ListItem" to="/projects" tag="li"
          >Projects</nuxt-link
        >
        <nuxt-link class="navigation-Nav_ListItem" to="/contact" tag="li"
          >Contact</nuxt-link
        >
        <nuxt-link class="navigation-Nav_ListItem" to="/client-portal" tag="li"
          >Client Portal</nuxt-link
        >
      </ul>
      <div class="navigation-Nav_Social">
        <a href="https://www.instagram.com/unspoken.agreement/">Instagram</a>
      </div>
    </div>
    <div class="navigation-Main">
      <div class="navigation-Main_Menu">
        <span @click="toggleNav">Menu</span><span>|</span
        ><span>{{ $route.name }}</span>
      </div>
      <nuxt-link to="/" class="logo navigation-Main_Logo" tag="div">
        <span>Unspoken </span><span>Agreement</span>
      </nuxt-link>
      <TheStudio class="desktop" />
    </div>
    <div class="navigation-Nav navigation-Nav_Bottom" :class="{ active: nav }">
      <ul class="navigation-Nav_List">
        <nuxt-link class="navigation-Nav_ListItem" to="/studio" tag="li"
          >Studio</nuxt-link
        >
        <nuxt-link class="navigation-Nav_ListItem" to="/projects" tag="li"
          >Projects</nuxt-link
        >
        <nuxt-link class="navigation-Nav_ListItem" to="/contact" tag="li"
          >Contact</nuxt-link
        >
        <nuxt-link class="navigation-Nav_ListItem" to="/client-portal" tag="li"
          >Client Portal</nuxt-link
        >
      </ul>
      <div class="navigation-Nav_Social">
        <a href="https://www.instagram.com/unspoken.agreement/">Instagram</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: false
    }
  },
  methods: {
    toggleNav() {
      this.nav = !this.nav
    }
  }
}
</script>

<style lang="sass">
.navigation
  padding: var(--spacing-side-one)
  overflow: visible
  @media screen and ( max-width: $breakpoint-mobile)
    color: currentColor
    padding: var(--spacing-side-one)
  a, a:hover
    text-decoration: none
  &-Mobile
    border-bottom: $border
    padding: var(--spacing-side-one)
    padding-top: 0
  &-Main
    display: flex
    justify-content: space-between
    align-items: center
    border-bottom: $border
    padding: var(--spacing-side-one)
    @media screen and ( min-width: $breakpoint-mobile)
      border-top: $border
    > div
      flex-shrink: 0
    &_Menu
      @media screen and ( min-width: $breakpoint-mobile)
        width: var(--width-leftside)
      > span:first-of-type
        text-transform: uppercase
        margin-right: .5rem
        cursor: pointer
      > span:nth-child(2)
        @media screen and ( max-width: $breakpoint-mobile)
          display: none
      > span:last-of-type
        font-family: $morion
        margin-left: .5rem
        @media screen and ( max-width: $breakpoint-mobile)
          display: none
    &_Logo
      cursor: pointer
      @media screen and ( min-width: $breakpoint-mobile)
        flex-grow: 5
        font-size: 1.5rem
        span
          display: block
          line-height: 1
  &-Nav
    display: none
    flex-wrap: nowrap
    justify-content: space-between
    align-items: center
    overflow-x: auto
    padding: var(--spacing-side-one)
    padding-bottom: 0
    &.active
       display: flex
    &_List
      display: flex
      flex-wrap: nowrap
    &_ListItem
      margin-right: 2rem
      font-family: $morion
      white-space: nowrap
      cursor: pointer
    &_Social a
      font-family: $morion
      cursor: pointer

.header
  .navigation-Nav_Top, .navigation-Nav_Top.active
    display: none

.footer
  .navigation-Nav_Bottom, .navigation-Nav_Bottom.active
    display: none
  @media screen and ( max-width: $breakpoint-mobile)
    .navigation-Mobile
      display: none
    .navigation-Main
      border-top: $border
</style>
