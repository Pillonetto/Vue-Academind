const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    increaseCounter(num) { this.counter+=num; },
    decreaseCounter(num) { if((this.counter-num) >= 0) this.counter -= num;},

    setName(e){
      this.name = e.target.value;
    },

    submitForm() {
    },

    setConfirmedName(){
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
