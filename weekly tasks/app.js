var app = new Vue({
    el: '#app',
    data: function () {
      return {
        message: 'The start of Vue components',
        record: 'You loaded this page on ' + new Date().toLocaleString()
      }
    }
})

var video = new Vue({
    el: '#Toggle',
    data: {
        message: 'Interesting video awaits'
    },
    methods: {
        showtext: function () {
        this.message = this.message.split('').reverse().join('')
        }
    }
})

new Vue({
    el: '#video',
    data: {
        displayvideo: true
    }
});

new Vue({
    el: '#inputsform',
    data: {
      msg      : 'hi!',
      checked  : true,
      picked   : 'one',
      selected : 'two',
      Selection: ['one', 'two','three','four','five']
    }
})
new Vue({
    el: "#test",
    data: {
      item: [{ name: '' }],
    }
  })