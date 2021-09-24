var SignupForm = Vue.component('signup-form', {
    template: '#signup-form',
    data() {
      return {
        email: '',
        email_msg: '',
        password1: '',
        pwd1_msg: '',
        emailauth: 'daffyduck@gmail.com',
        pwdauth:'bugsbunny',
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
      check_passwords_match() 
      {
        if(this.password1.length > 5 && this.password2.length > 5) 
        {
          if(this.password2 != this.password1)
          {
            this.pwd2_msg = 'Passwords do not match';
            this.disable_btn = true;
            return true;
          } else 
          {
            this.pwd2_msg = '';
            this.disable_btn = false;
            return false;
          }
          
        }
      },
      
      on_login() {
        this.email_msg = '';
        this.pwd1_msg = '';
        if(this.password1 == this.pwdauth && this.email == this.emailauth)
        {
          this.$emit('change_comp', 'results');
        }else
        {
          alert("Username or password is incorrect");
        }
      }, 
      
    }
  });
  
  var Results = Vue.component('results', {
    template: '#results',
    methods: {
      back_to_signup() {
        this.$emit('change_comp', 'signup-form');
      }
    } 
  });
  
  var Terms = Vue.component('terms', {
    template: '#terms',
    methods: {
      back_to_signup() {
        this.$emit('change_comp', 'signup-form');
      }
    }
    
  });
  
  new Vue({ 
    el: '#app',
    data: {
      compname: 'signup-form',
    },
    components: {
      'signup-form': SignupForm,
      'results': Results,
    },
    methods: {
      swapcomp: function(comp) {
        this.compname = comp;
      }
    }
  });