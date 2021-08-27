//Login
const newapp = new Vue ({ 
    el:'#login',
    name: 'Login',
    data() {
        return {
            input: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        login() {
            if(this.input.username != "" && this.input.password != "") {
                if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                    this.$emit("authenticated", true);
                    this.$router.replace({ name: "secure" });
                } else {
                    console.log("The username and or password is incorrect");
                }
            } else {
                console.log("Enter a username and password");
            }
        }
    }
})

