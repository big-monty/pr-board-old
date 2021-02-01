<template>
  <div class="home">
    <PRs />
  </div>
</template>

<script>

import PRs from '@/components/PRs.vue';

export default {
  components: {
    PRs,
  }
};
</script>
<style lang="scss">
  .home {
    display: flex;
    justify-content: center;
  }
</style>
