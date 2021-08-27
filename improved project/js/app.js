 //Registration
 new Vue({
     el: '#senddata',
     data: {
     fname: '',
     lname:'',
     email:'',
     password:'', 
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
//Search component using props
Vue.component('searchbox',{
    props: ['value'],
    template: 'HTML DIV DATA HERE'
})
    
class Post {
constructor(title, link, img) {
    this.title = title;
    this.link = link;
    this.img = img;
}
}

//Sponsor data
const newapp = new Vue ({
el: '#searchapp',
data: {
search:'',
    postList : [
    new Post(
        'PLE', 
        'https://www.ple.com.au/',  
        'https://plecom.imgix.net/bo-140759-ple-logo-new-portrait.svg?auto=format&w=145&h=71'
    ),
    new Post(
        'Cooler_Master', 
        'https://www.coolermaster.com/au/en-au/', 
        'https://cdn.coolermaster.com/media//1044/cm-logo-slogan-bottom-white.png'
    ),
    new Post(
        'AMD', 
        'https://www.amd.com/en', 
        '../images/amd2.jpg'
    ),
    new Post(
        'Aorus', 
        'https://www.aorus.com/', 
        '../images/aorus.jpg'
    ),
    new Post(
        'Western_Digital', 
        'https://www.westerndigital.com/', 
        '../images/wd.jpg'
    ),
    new Post(
        'Intel', 
        'https://www.intel.com.au/content/www/au/en/homepage.html', 
        '../images/intel2.jpg'
    ),
    new Post(
        'Razer', 
        'https://www.razer.com/', 
        '../images/razer.jpg'
    ),
    new Post(
        'League_of_Legends', 
        'https://oce.leagueoflegends.com/en-au/', 
        '../images/lol.jpg'
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

//props and emit 
Vue.component("blog-post",{
    props:["post"],
    template: '<div><h1>{{post.title}}</h1><h6>{{post.id}}</h6><button v-on:click="$emit(\'shrink-text\')">Shrink Text</button></div>' ,
})

Vue.component("to-do",{
    props:["todo"],
    template: "<li> {{todo}}</li>",

})