<template>
  <div class="studio">
    <div class="studio-Row">
      <div class="studio-Color">
        <div class="studio-Color_Shape"></div>
      </div>
      <div class="studio-Location">Studio Colorado</div>
      <div class="mobile studio-Time">2:33:06</div>
      <div class="mobile studio-Degrees">82<span>°</span></div>
    </div>
    <div class="desktop studio-Row">
      <div class="studio-Time">2:33:06</div>
      <div class="studio-Degrees">82<span>°</span></div>
    </div>
  </div>
</template>

<style lang="sass">
$ny: #619BF8
$fl: #FFAF5A
$col: #CEE583
$ams: #E9DDCF

.studio
  display: inline-flex
  flex-direction: column
  line-height: 1.5
  @media screen and ( max-width: $breakpoint-mobile)
    display: flex
  &-Row
    display: flex
    justify-content: space-between
    > div
      vertical-align: text-bottom
      @media screen and ( max-width: $breakpoint-mobile)
        margin-right: .5rem
      &:last-child
        margin-right: 0
  &-Color
    width: 1.5rem
    display: flex
    align-items: center
    &_Shape
      width: 1rem
      height: 1rem
      background: $col
      border-radius: 1000px
  &-Location
    text-transform: uppercase
    @media screen and ( max-width: $breakpoint-mobile)
      flex-grow: 1
  &-Time
    margin-left: 1.5rem
  &-Degrees
    @media screen and ( max-width: $breakpoint-mobile)
      margin-left: 1rem
</style>
