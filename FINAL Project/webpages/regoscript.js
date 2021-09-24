$vm = new Vue({
	el: "#app",
	data: {
            search:'',
		rows: [
            { Id: 1, Name: "Midnite ghost " , Status:"Attended" },
            { Id: 2, Name:	"Insie ", Status:"Attended"},
            { Id: 3, Name:	"Fidilduck ", Status:"Attended"},
            { Id: 4, Name:	"DarkMerv ", Status:"Attended"},
            { Id: 5, Name:	"dead_man", Status:"Attended"},
            { Id: 6, Name:	"H@ndle ", Status:"Attended"},
            { Id: 7, Name:  "FlaminMelon ", Status:"Attended"},
            { Id: 8, Name:	"DisGonBGud ", Status:"Attended"},
            { Id: 9, Name:	"PEARS ", Status:"Attended"},
            { Id: 10, Name:	"gremliNN ", Status:"Attended"},
            { Id: 11, Name:	"Zuko ", Status:"Attended"},
            { Id: 12, Name: "DI5TRICT ", Status:"Attended"},
            { Id: 13, Name:	"JKR ", Status:"Attended"},
            { Id: 14, Name:	"chusKah ", Status:"Attended"},
            { Id: 15, Name:	"Mai ", Status:"Attended"},
            { Id: 16, Name:	"streaty ", Status:"Attended"},
            { Id: 17, Name:	"matr1kz ", Status:"Attended"},
            { Id: 18, Name:	"raspberry ", Status:"Attended"},
            { Id: 19, Name:	"Nuke	 ", Status:"Attended"},
            { Id: 20, Name:	"Toxic ", Status:"Attended"},
            { Id: 21, Name:	"yoshiyoshi ", Status:"Attended"},
            { Id: 22, Name:	"Cazzar ", Status:"Attended"},
            { Id: 23, Name:	"Sw0rds106 ", Status:"Attended"},
            { Id: 24, Name:	"Jimmyson ", Status:"Attended"},
            { Id: 25, Name:	"Superm8y ", Status:"Attended"},
            { Id: 26, Name:	"Vultron ", Status:"Attended"},
            { Id: 27, Name:	"Scr1pt ", Status:"Attended"},
            { Id: 28, Name:	"kibstar ", Status:"Attended"},
            { Id: 29, Name:	"p0k ", Status:"Attended"},
            { Id: 30, Name:	"AaronScythe ", Status:"Attended"},
            { Id: 31, Name:	"liam088 ", Status:"Attended"},
            { Id: 32, Name:	"SaVage ", Status:"Attended"},
            { Id: 33, Name:	"gump ", Status:"Attended"},
            { Id: 34, Name:	"typeR ", Status:"Attended"},
            { Id: 35, Name:	"Layze ", Status:"Attended"},
		],
            
	},
	methods: {
		save(item) {
			alert(item.uid);
		}
	},
      computed: {
      filteredList() {
            if(this.search){
                  return this.rows.filter((item)=>{
                        return this.search.toLowerCase().split(' ').every(v => item.Name.toLowerCase().includes(v))
                  })
            }else
            {
                  return this.rows;
            }
      }
      }         
})