class Post {
    constructor(title, img) {
        this.title = title;
        this.img = img;
    }
    }

    const newapp = new Vue ({
    el: '#searchapp',
    data: {
    search:'',
        gamelist: [
        new Post(
            'Call of Duty Warzone',  
            '../images/warzone.jpg'
        ),
        new Post(
            'Call of Duty Cold War', 
            '../images/coldwar.jpg'
        ),
        new Post(
            'Age of Empires', 
            '../images/age.jpg'
        ),
        new Post(
            'Age of Empires 2', 
            '../images/aoe2.jpg'
        ),
        new Post(
            'Apex Legends', 
            '../images/apex_legends.jpg'
        ),
        new Post(
            'CSGO', 
            '../images/csgo.jpg'
        ),
        new Post(
            'Dota 2', 
            '../images/dota2.jpg'
        ),
        new Post(
            'League_of_Legends', 
            '../images/lol.jpg'
        ),
        new Post(
            'Switch', 
            '../images/12switch.jpg'
        ),
        new Post(
            'Mario Kart', 
            '../images/mario_kart.gif'
        ),
        new Post(
            'Minecraft', 
            '../images/minecraft.jpg'
        ),
        new Post(
            'Rainbow six: Siege', 
            '../images/rb6.jpg'
        ),
        new Post(
            'StarCraft 2', 
            '../images/sc2.jpg'
        ),
        new Post(
            'Team Fortress 2', 
            '../images/tf2.jpg'
        ),
        new Post(
            'Valorant', 
            '../images/valorant.jpg'
        ),
        new Post(
            'Magic the Gathering', 
            '../images/mtga.jpg'
        ),
        new Post(
            'Exploding Kittens', 
            '../images/exploding.png'
        ),
        new Post(
            'Halo', 
            '../images/halo_online.png'
        ),
        new Post(
            'Bomberman', 
            '../images/bomberman.jpg'
        ),
        new Post(
            'Fortnite', 
            '../images/fortnite.jpg'
        ),
    ]
    },
    computed: {
        filteredList() {
          return this.gamelist.filter(post => {
            return post.title.toLowerCase().includes(this.search.toLowerCase())
          })
        }
      }
    })