<template>
  <user-data class="boxContainer" @submit-user="updateUserInfo"></user-data>
  <active-user class="boxContainer" :username="name" :age="age"></active-user>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: "",
    };
  },
  methods: {
    updateUserInfo(newName, newAge) {
      this.name = newName;
      this.age = newAge;
    },
  },
};
</script>

<style scoped>
.boxContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 90%;
  max-width: 30rem;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 8px;
  margin: 3vh auto;
  padding: 16px;

  text-align: center;
}
</style>
