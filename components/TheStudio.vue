<template>
  <div class="studio">
    <div class="studio-Row">
      <div class="studio-Color">
        <div class="studio-Color_Shape"></div>
      </div>
      <div class="studio-Location">Studio Colorado</div>
      <div class="mobile studio-Time">{{ timeNow }}</div>
      <div class="mobile studio-Degrees">82<span>°</span></div>
    </div>
    <div class="desktop studio-Row">
      <div class="studio-Time">{{ timeNow }}</div>
      <div class="studio-Degrees">82<span>°</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeNow: "00:00:00",
      myText: 0,
      studio: [
        {
          studio: "new york",
          time: new Date("2017-01-03"),
          temp: "f"
        },
        {
          studio: "florida",
          time: new Date("2017-01-03"),
          temp: "f"
        },
        {
          studio: "colorado",
          time: new Date("2017-01-03"),
          temp: "f"
        },
        {
          studio: "amsterdam",
          time: new Date("2017-01-03"),
          temp: "c"
        }
      ]
    }
  },
  created() {
    setInterval(() => {
      this.startTime()
    }, 1000)
  },
  mounted() {
    this.changeStudio()
  },
  methods: {
    changeStudio() {
      // console.log("CHANGING STUDIO")
    },
    startTime() {
      var today = new Date()
      var h = today.getHours()
      var m = today.getMinutes()
      var s = today.getSeconds()
      this.timeNow =
        this.timeFormatter(h) +
        ":" +
        this.timeFormatter(m) +
        ":" +
        this.timeFormatter(s)
    },
    timeFormatter(time) {
      if (time < 10) {
        return "0" + time
      } else {
        return time
      }
    }
  }
}
</script>

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
