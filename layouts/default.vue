<template>
  <!-- Change if needed -->
  <main lang="en-US" translate="no">
    <LazyTheHeader />
    <transition name="pages" mode="out-in">
      <nuxt />
    </transition>
    <LazyTheFooter />
  </main>
</template>
