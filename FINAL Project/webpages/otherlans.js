class Post {
    constructor(title,link, img, description) {
        this.title = title;
        this.link = link;
        this.img = img;
        this.description = description;
    }
    }

    const newapp = new Vue ({
    el: '#searchapp',
    data: {
    search:'',
        gamelist: [
        new Post(
            'The Big Lan',  
            'https://www.thebiglan.com/',
            '../images/thebiglan.png',     
            'Mitcham Baptist Church, 6-8 Simla St, Mitcham VIC 3132'
        ),
        new Post(
            'LANDU', 
            'https://landu.com.au/',
            '../images/landu.png',   
            'Melbourne Showgrounds, 145 Epson Rd, Flemington VIC 3031'
        ),
        new Post(
            'Indie Lan', 
            'https://www.facebook.com/indielan',
            '../images/indie.jpg',            
            'Boronia Community Church of Christ, 59 Boronia Rd, Boronia VIC 3155'
        ),
        new Post(
            'Lan of the Damned', 
            'http://lanotd.com/',
            '../images/lotd.gif',            
            'Brauer College Auditorium, 37 Caramut Rd, Warrnambool VIC 3280'
        ),
        new Post(
            'Respawn Lan', 
            'https://respawn.com.au/',
            '../images/respawn.png',            
            'Batman Royale, 14 Gaffney St, Coburg VIC 3058'
        ),
        new Post(
            'Switch Lan', 
            'http://www.switchlans.com/',
            '../images/switchlogo.png',            
            '43-49 Nyora Road, Eltham'
        ),
        new Post(
            'Lan Smash', 
            'https://lansmash.com/',
            '../images/hero.png',            
            'Sheldon Event Centre Gate 1 / Gate 2, Taylor Road Sheldon, QLD, Australia'
        ),
        new Post(
            'Thunder Lan', 
            'https://www.thunderlan.org/',
            '../images/thunderlan.png',            
            'OLSH Sadadeen Marian Hall,95 Sadadeen Rd, Alice Springs, NT, 0870, Australia'
        ),
        new Post(
            'Avalanche Lan', 
            'avalanche.gg',
            '../images/avalanche.png',            
            'TBD'
        ),
        new Post(
            'RedFlag Lan', 
            'https://www.rflan.org/',
            '../images/rflan.png',            
            'Curtin Stadium, Curtin University, B111, Curtin University Kent Street, Bentley WA 6102'
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