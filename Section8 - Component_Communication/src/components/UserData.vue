<template>
  <form @submit.prevent="submitUser">
    <div class="inputBox">
      <label for="">Username</label>
      <input type="text" v-model="inputUsername" />
    </div>
    <div class="inputBox">
      <label for="">Age</label>
      <input type="number" v-model="inputAge" />
    </div>
    <button class="btn btn-success">Success</button>
  </form>
</template>

<script>
export default {
  emit: ["submit-user"],

  data() {
    return {
      inputUsername: "",
      inputAge: "",
    };
  },

  methods: {
    submitUser() {
      if (this.inputUsername && this.inputAge) {
        this.$emit("submit-user", this.inputUsername, this.inputAge);

        this.inputUsername = "";
        this.inputAge = "";
      }
    },
  },
};
</script>

<style scoped>
.inputBox {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
}

.inputBox label {
  margin: 0;
  padding: 0;
}

button {
  margin-top: 16px;
}
</style>
