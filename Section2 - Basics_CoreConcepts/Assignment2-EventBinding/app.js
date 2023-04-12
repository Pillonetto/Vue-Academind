const VueApp = Vue.createApp({
  data(){
    return {
      message: "Hello, user!",
      paragraph: 'Output will be here!',
      paragraphv2: 'Output will be here!'
    }
  },
  methods: {
    setParagraph(event) {
      this.paragraph = event.target.value;
    },

    triggerAlert(){alert(this.message)},

    setParagraphv2(event) {
      this.paragraphv2 = event.target.value;
    }
  }
}).mount('#assignment');