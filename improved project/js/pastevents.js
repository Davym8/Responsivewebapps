//grid and list view transition
var eventdata = {
    columns: [
        "Id",
        "Event",
        "Date",
        "Registrations",
        "Images"
    ],
    data: [
        { Id: 1, Event: 12, Date: "21/08/2021", Registrations: "95", Images: "12", ImagePath: "images/a.jpg" },
        { Id: 2, Event: 13, Date: "21/08/2021", Registrations: "95", Images: "32", ImagePath: "images/b.jpg" },
        { Id: 3, Event: 31, Date: "21/08/2021", Registrations: "95", Images: "51", ImagePath: "images/c.jpg" },
        { Id: 4, Event: 11, Date: "21/08/2021", Registrations: "95", Images: "22", ImagePath: "images/d.jpg" },
        { Id: 5, Event: 55, Date: "21/08/2021", Registrations: "95", Images: "111", ImagePath: "images/e.jpg" }
    ]
};

var gridviewApp = new Vue({
	
	el: '#app-switchview',
	data: {
		gridData: eventdata,
        buttonSwitchViewText: "Switch to ListView",
        isGridView: true,
        isBookData: false
	},
	methods: {
		
		switchView: function() {
			
			if (this.isGridView) {
                this.buttonSwitchViewText = "Switch to GridView";
			}
			else {
                this.buttonSwitchViewText = "Switch to ListView";
			}
			this.isGridView = !this.isGridView;
        },
	},
    switchData: function () {

        if (this.isBookData) {
            this.buttonSwitchDataText = "Switch to games data";
            this.gridData = photos;
        }
        else {
            this.buttonSwitchDataText = "Switch to photos data";
            this.gridData = games;
        }
        this.isBookData = !this.isBookData;
    }
});