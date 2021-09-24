class Post {
    constructor(title, img) {
        this.title = title;
        this.img = img;
    }
    }
    const newapp = new Vue ({
    el: '#staffapp',
    data: {
        stafflist: [
        new Post(
            'Cazzar',  
            '../images/rw.jpg'
        ),
        new Post(
            'Dartus', 
            '../images/ko2.jpg'
        ),
        new Post(
            'Mango', 
            '../images/ko.jpg'
        ),
        new Post(
            'Jimmyson', 
            '../images/ww.jpg'
        ),
        new Post(
            'Finch', 
            '../images/ez.jpg'
        ),
        new Post(
            'Sw0rds', 
            '../images/zoe.jpg'
        ),
        new Post(
            'Raspberry', 
            '../images/amog.jpg'
        ),
        new Post(
            'Nuke', 
            '../images/nuke.jpg'
        ),
        new Post(
            'Mar', 
            '../images/mario.jpg'
        ),
        new Post(
            'Layzer', 
            '../images/odst.jpg'
        ),
        new Post(
            'Vultron', 
            '../images/ghost.jpg'
        ),
        new Post(
            'willump', 
            '../images/mario_kart.gif'
        ),
    ]
    },
})