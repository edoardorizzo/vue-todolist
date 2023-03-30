const { createApp } = Vue

createApp({
  data() {
    return {
        inputText: '',
        tasks: [
        {
            text: 'Design header sito beauty'
        },
        {
            text: 'Call revisione sito Mountain Bike'
        },
        {
            text: 'Call allineamneto team di sviluppo'
        },
        {
            text: 'Design component card'
        },
        {
            text: 'Design carousel'
        },
        {
            text: 'Design comp 4/8 col'
        },
      ]
    }
  },
  methods: {
    addTaskToList(){
        this.tasks.unshift(this.inputText);
    }
  }
}).mount('#app')