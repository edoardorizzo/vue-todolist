const { createApp } = Vue

createApp({
  data() {
    return {
        inputText: '',
        tasks: [
        {
            text: 'Design header sito beauty',
            done: false
        },
        {
            text: 'Call revisione sito Mountain Bike',
            done: false
        },
        {
            text: 'Call allineamneto team di sviluppo',
            done: false
        },
        {
            text: 'Design component card',
            done: false
        },
        {
            text: 'Design carousel',
            done: false
        },
        {
            text: 'Design comp 4/8 col',
            done: false
        },
      ]
    }
  },
  methods: {
    addTaskToList(){
        this.tasks.unshift(this.inputText)
    },
    taskDone(){
        this.tasks.done = true;
        console.log(this.taskDone);
    },
    lineThrough(){
        if (this.tasks.done == true) {
            this.tasks.text
        }
    }
  }
}).mount('#app')