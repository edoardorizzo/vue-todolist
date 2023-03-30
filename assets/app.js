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
        const taskToAdd = {
            text: this.inputText,
            done: false,
        }
        this.tasks.unshift(taskToAdd)
    },
    taskDone(index, event){
        this.tasks[index].done = true;
        event.target.classList.toggle('line-through');
    },
    deleteTask(){
        this.tasks.shift()
    },
  }
}).mount('#app')