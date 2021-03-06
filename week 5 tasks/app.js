   
new Vue({
el: '#senddata',
data: {
fname: '',
lname:'',
check: false,
checked: false,
checkers: false
},
methods: {
    processform: function(){
        console.log({fname: this.fname, lname: this.lname, check: this.check, checked: this.checked, checkers: this.checkers,})
    }
}
})

class Post {
    constructor(title, link, author, img) {
      this.title = title;
      this.link = link;
      this.author = author;
      this.img = img;
    }
  }
  
  const newapp = new Vue ({
    el: '#searchapp',
    data: {
      search: '',
      postList : [
        new Post(
          'Implemented', 
          'https://vuejs.org/', 
          'Davy', 
          'https://vuejs.org//images/logo.png'
        ),
        new Post(
          'where', 
          'https://facebook.github.io/react/', 
          'Daffy',
          'https://daynin.github.io/clojurescript-presentation/img/react-logo.png'
        ),
        new Post(
          'does', 
          'https://angularjs.org/', 
          'Sam', 
          'https://angularjs.org/img/ng-logo.png'
        ),
        new Post(
          'this', 
          'http://emberjs.com/', 
          'Rachel',
          'http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200'
        ),
        new Post(
          'go', 
          'https://www.meteor.com/', 
          'Chris', 
          'http://hacktivist.in/introduction-to-nodejs-mongodb-meteor/img/meteor.png'
        ),
        new Post(
          'please', 
          'http://aurelia.io/', 
          'Tim',
          'https://cdn.auth0.com/blog/aurelia-logo.png'
        ),
        new Post(
          'give', 
          'https://nodejs.org/en/', 
          'A. A. Ron',
          'https://code-maven.com/img/node.png'
        ),
        new Post(
          'me', 
          'https://pusher.com/', 
          'Alex', 
          'https://avatars1.githubusercontent.com/u/739550?v=3&s=400'
        ),
        new Post(
          'Distinction', 
          'http://feathersjs.com/', 
          'Chuck',
          'https://cdn.worldvectorlogo.com/logos/feathersjs.svg'
        ),
  ]
    },
    computed: {
      filteredList() {
        return this.postList.filter(post => {
          return post.title.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    }
  })
