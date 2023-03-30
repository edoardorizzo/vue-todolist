const { createApp } = Vue

createApp({
  data() {
    return {
      tasks: [
        {
            text: 'Design header sito beauty',
            done: true
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
  }
}).mount('#app')