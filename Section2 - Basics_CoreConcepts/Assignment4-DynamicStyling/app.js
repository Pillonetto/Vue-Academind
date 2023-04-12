const VueApp = Vue.createApp({
  data() {

    return {
      optionsVisible: false,
      selectedOption: 0,
      paragraphVisible: true,
      backgroundInput: '',
    };

  },
  computed: {

    dropdownVisibility() {
      return this.optionsVisible ? "visible" : "hidden"; //Dropdown menu
    },

    paragraphVisibility() {
      return this.paragraphVisible ? "visible" : "hidden";
    },

    selectedClass() {
      if (this.selectedOption === 1) return "user1";
      else if (this.selectedOption === 2)
        //Makes sure <p> is unstyled before selecting option
        return "user2";
    },

  },
  methods: {

    showOptions() {
      this.optionsVisible = !this.optionsVisible;
    },

    selectOption(num) {
      this.selectedOption = num;
      this.optionsVisible = false; //Closes dropdown menu
    },

    showParagraph(){
      this.paragraphVisible = !this.paragraphVisible;
    },

  },
}).mount("#assignment");
