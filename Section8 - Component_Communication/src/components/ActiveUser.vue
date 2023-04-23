<template>
  <section>
    <h1>Current User:</h1>
    <div v-if="username && age">
      <h4>Username: {{ username }}</h4>
      <h4>Age: {{ age }}</h4>
    </div>
    <div v-else>No user yet!</div>
  </section>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
