const VueApp = Vue.createApp({

  data(){
    return {
      tasks: [],
      inputTask: '',
      taskVisibility: false,
      buttonContent: 'Hide'
    }
  },

  methods:{

    addTask(){
      //Prevents empty tasks
      if(this.inputTask){ 
        this.tasks.push(this.inputTask);
        this.inputTask = '';
      }
    },
    changeVisibility(){
      this.taskVisibility = !this.taskVisibility;
      this.buttonContent = (this.taskVisibility) ? 'Hide' : 'Show';
    },

  },

}).mount('#assignment');