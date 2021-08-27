   
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
