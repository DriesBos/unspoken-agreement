<template>
  <header class="header">
    <div class="mobile header-Mobile">
      <TheStudio />
    </div>
    <div class="header-Main">
      <div class="header-Main_Menu">
        <span @click="toggleNav">Menu</span><span>|</span><span>Welcome</span>
      </div>
      <div class="logo header-Main_Logo">
        <span>Unspoken </span><span>Agreement</span>
      </div>
      <TheStudio class="desktop" />
    </div>
    <div class="header-Nav" :class="{ active: nav }">
      <ul class="header-Nav_List">
        <nuxt-link class="header-Nav_ListItem" to="/studio" tag="li"
          >Studio</nuxt-link
        >
        <nuxt-link class="header-Nav_ListItem" to="/projects" tag="li"
          >Projects</nuxt-link
        >
        <nuxt-link class="header-Nav_ListItem" to="/contact" tag="li"
          >Contact</nuxt-link
        >
        <nuxt-link class="header-Nav_ListItem" to="/client-portal" tag="li"
          >Client Portal</nuxt-link
        >
      </ul>
      <div class="header-Nav_Social">
        <a href="https://www.instagram.com/unspoken.agreement/">Instagram</a>
      </div>
    </div>
  </header>
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
.header
  position: fixed
  left: 0
  top: 0
  right: 0
  z-index: $zindex-header
  padding: var(--spacing-side-two)
  overflow: visible
  @media screen and ( max-width: $breakpoint-mobile)
    background: $white
    color: $black
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
        flex-grow: 2
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
</style>
