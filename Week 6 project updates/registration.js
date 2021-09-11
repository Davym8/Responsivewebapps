var SignupForm = Vue.component('signup-form', {
    template: '#signup-form',
    data() {
      return {
        firstname:'',
        first_name:'',
        lastname:'',
        last_name:'',
        username:'',
        user_name:'',
        email: '',
        email_msg: '',
        password1: '',
        pwd1_msg: '',
        password2: '',
        pwd2_msg: '',
        disable_btn: true,
        msg1: true,
        msg2: true,
        checked: false,
        checkers: false,
        
      }
    },
    watch: {
      email: function(value) {
        this.valid_email(value, 'email_msg');
      },
      firstname: function(value) {
        this.check_name_length(value, 'first_name', 20);
      },
      lastname: function(value) {
        this.check_lname_length(value, 'last_name', 20);
      },
      username: function(value) {
        this.check_uname_length(value, 'user_name', 20);
      },
      password1: function(value) {
        if(this.check_password_length(value, 'pwd1_msg', 8)) {
          this.check_passwords_match();
        }
      },
      password2: function(value) {
        if(this.check_password_length(value, 'pwd2_msg', 8)) {
          this.check_passwords_match();
        }
      }
    },
    methods: { 
        newsHandler(e) {
            if(this.checkers == false)
            {
                alert("its worth it to subscribe!")
            }
            console.log(e.target.checked);
        },
        clickHandler(e) {
            if(this.checked == false)
            {
                alert("You must agree to terms")
            }
            console.log(e.target.checked);
        },
      valid_email(email, msg) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
          this[msg] = '';
          return true;
        } else {
          this[msg] = 'waiting for a valid email';
          return false;
        } 
      },
      check_name_length(value, msg, total) {
        var length = value.length;
        var sum = 0;
        var display;
        sum = (total - length)
        if(length > total) 
        {
            display = 'needs to be less than: ' + total + ' Characters';
            this.first_name = display;
        } else 
        {
            this[msg] = display;
            return false;
        }
      },
      check_lname_length(value, msg, total) {
        var length = value.length;
        var sum = 0;
        var display;
        sum = (total - length)
        if(length > total) 
        {
            display = 'needs to be less than: ' + total + ' Characters';
            this.last_name = display;
        } else 
        {
            this[msg] = display;
            return false;
        }
      },
      check_uname_length(value, msg, total) {
        var length = value.length;
        var sum = 0;
        var display;
        sum = (total - length)
        if(length > total) 
        {
            display = 'needs to be less than: ' + total + ' Characters';
            this.user_name = display;
        } else 
        {
            this[msg] = display;
            return false;
        }
      },
      check_password_length(value, msg, total) {
        var length = value.length;
        var sum = 0;
        var display;
        sum = (total - length);
        switch(sum) {
          case 0:
            display = '';
            break;
          case 1:
            display = 'need '+ sum + ' more character.';
            break;
          default:
            display = 'need '+ sum + ' more characters';
        }
        if(length >= total) {
          this[msg] = '';
          return true;
        } else {
          this[msg] = display;
          return false;
        }
      },
      
      check_passwords_match() {
        if(this.password1.length > 5 && this.password2.length > 5) {
            if(this.password2 != this.password1) {
              this.pwd2_msg = 'Passwords do not match';
              this.disable_btn = true;
              return true;
            } else {
              this.pwd2_msg = '';
              this.disable_btn = false;
              return false;
            }
          }
      },
      
      on_signup() {
        this.firstname = '',
        this.first_name = '',
        this.lastname = '',
        this.email = '';
        this.password1 = '';
        this.password2 = '';
        this.email_msg = '';
        this.pwd1_msg = '';
        this.pwd2_msg = '';
        this.msg1 = false;
        this.msg2 = false;
        this.disable_btn = true;
        this.checked = false;
        this.checkers = false;
        this.$emit('change_comp', 'results');
      }, 
      show_terms() {
        this.$emit('change_comp', 'terms');
      }
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
      'terms': Terms
    },
    methods: {
      swapcomp: function(comp) {
        this.compname = comp;
      }
    }
  });