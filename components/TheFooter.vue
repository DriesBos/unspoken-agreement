<template>
  <footer class="footer">
    <div class="footer-Content">
      <div class="footer-Content_Button">
        <div class="button">
          <a href="mailto:hello@unspokenagreement.com" target="_blank"
            >Hire our team</a
          >
        </div>
      </div>
      <div class="footer-Content_TextSwitch">
        <p>Currently designing</p>
        <p>
          A branding suite and digital experience for a wellness brand in
          Chicago.
        </p>
      </div>
    </div>
    <TheNavigation class="footer-Nav" />
  </footer>
</template>

<style lang="sass">
.footer
  position: relative
  display: flex
  flex-direction: column
  margin: var(--spacing-side-one)
  color: $white
  background: $black
  z-index: $zindex-footer
  @media screen and ( max-width: $breakpoint-mobile)
    flex-direction: column-reverse
  &-Content
    display: flex
    padding: var(--spacing-side-one)
    padding-top: var(--spacing-three)
    padding-bottom: calc(200px - 1rem)
    @media screen and ( max-width: $breakpoint-mobile)
      flex-direction: column-reverse
      padding-bottom: var(--spacing-side-one)
    &_Button
      @media screen and ( min-width: $breakpoint-mobile)
        width: var(--width-leftside)
      @media screen and ( max-width: $breakpoint-mobile)
        margin-left: var(--spacing-side-one)
    &_TextSwitch
      margin-bottom: var(--spacing-one)
      padding-left: var(--spacing-one)
      @media screen and ( max-width: $breakpoint-mobile)
        padding-bottom: var(--spacing-two)
      p:first-of-type
        font-family: $morion
        line-height: 1
        padding-bottom: 1em
      p:last-of-type
        max-width: 20rem
</style>
