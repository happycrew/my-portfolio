<template>
  <header class="header">
    <h1 class="logo">My portfolio</h1>
  </header>
</template>

<style scoped lang="scss">
@import '../assets/variables.scss';
.header {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  background: $header-background;
  padding: 1.35rem;
  box-shadow: $box-shadow;

  .logo {
    font-size: 2.25em;
    font-weight: 700;
    margin-left: 5%;
    text-transform: uppercase;
  }
}

</style>