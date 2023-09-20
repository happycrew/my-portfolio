<script>
import 'boxicons';
</script>

<template>
  <header class="header">
    <h1 class="logo">My portfolio</h1>
    <div class="header__icons">
      <a href="https://t.me/stncrwtg" target="_blank" class="header__icons-link">
        <box-icon name="telegram" type="logo" size="md" color="white"></box-icon>
      </a>
      <a href="/img/hh.resume.pdf" target="_blank">
        <v-btn> Resume </v-btn>
      </a>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import '../assets/styles/variables.scss';
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

  &__icons {
    margin-right: 5%;
    display: flex;
    gap: 20px;

    &-link {
      transition: 0.2s ease-in-out;
      &:hover {
        opacity: 0.7;
      }
    }
  }

  .logo {
    font-size: 2.25em;
    font-weight: 700;
    margin-left: 5%;
    text-transform: uppercase;
  }
}
</style>
