<template>
  <footer class="footer">
    <div class="footer-Content">
      <div class="footer-Content_Button">
        <a
          class="button"
          href="mailto:hello@unspokenagreement.com"
          target="_blank"
          >Hire our team</a
        >
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
  z-index: $zindex-footer
  background: $black
  color: $white
  display: flex
  flex-direction: column
  margin: var(--spacing-side-one)
  @media screen and ( max-width: $breakpoint-mobile)
    flex-direction: column-reverse
  &-Content
    display: flex
    padding: var(--spacing-side-two)
    @media screen and ( max-width: $breakpoint-mobile)
      flex-direction: column-reverse
    &_Button
      @media screen and ( min-width: $breakpoint-mobile)
        width: var(--width-leftside)
    &_TextSwitch
      p:first-of-type
        font-family: $morion
</style>
