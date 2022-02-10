<template>
  <div>Im index</div>
</template>

<script>
export default {
  layout: 'default',
  created() {
    this.$router.push('/components');
  },
};
</script>
