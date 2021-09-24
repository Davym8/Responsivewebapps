var SignupForm = Vue.component('contact-form', {
    template: '#contact-form',
    data() {
      return {
        name:'',
        email: '',
        email_msg: '',
        message: '',
        emailauth: false,
      }
    },
    watch: {
      email: function(value) {
        this.valid_email(value, 'email_msg');
      },      
      password1: function(value) {
        if(this.check_password_length(value, 'pwd1_msg', 8)) {
          this.check_passwords_match();
        }
      },
    },
    methods: { 
      valid_email(email, msg) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
          this[msg] = '';
          this.emailauth = true;
          return true;
        } else {
          this[msg] = 'waiting for a valid email';
          return false;
        } 
      },
      on_contact() {     
        this.email_msg = '';
        if(this.message == '' || this.email == '' || this.name == '')
        {
          alert("Please enter valid details");
        }
        else if(this.emailauth == false)
        {
          alert("Please enter a valid email");
        }else
        {
          this.$emit('change_comp', 'results');
        }
      }, 
      
    }
  });
  
  var Results = Vue.component('results', {
    template: '#results',
    methods: {
      back_to_signup() {
        this.$emit('change_comp', 'contact-form');
      }
    } 
  });
  
  var Terms = Vue.component('terms', {
    template: '#terms',
    methods: {
      back_to_signup() {
        this.$emit('change_comp', 'contact-form');
      }
    }
    
  });
  
  new Vue({ 
    el: '#app',
    data: {
      compname: 'contact-form',
    },
    components: {
      'contact-form': SignupForm,
      'results': Results,
    },
    methods: {
      swapcomp: function(comp) {
        this.compname = comp;
      }
    }
  });