$vm = new Vue({
	el: "#app",
	data: {
		rows: [
            { rules: "Best of Three (3)", description: "A round that is played up to three times where the first team or player to win twice will be declared the winner of the tournament match."},
            { rules: "Best of Five (5)", description:	"A round that is played up to five times where the first team or player to win three times will be declared the winner of the tournament match." },
            { rules: "Double Elimination", description:	"A tournament style bracket where players or teams are eliminated from a tournament after two losses. The last player or team standing is declared the winner." },
            { rules: "Event Coordinator", description:	"A role appointed by the LAN-slide team to individuals officially in charge of decision making to any part of the event."},
            { rules: "Game Match", description:	"An individual game played from start to finish that achieves an outcome (e.g. first to 16 points)."},
            { rules: "Mission Control", description:	"The name applied to the Tournament Registration / Sign Up desk and the event coordinator team that manages tournament brackets, match progression and in-game team captain liaison."},
            { rules: "Players", description:	"An individual who attends LAN-slide for the purposes of playing games at an event."},
            { rules: "Round Robin", description:	"A tournament style where teams or players will play games in turn against each opposing teams or players."},
            { rules: "Shoutcaster", description:	"A game commentator that broadcasts an online game by providing running commentary."},
            { rules: "Smurfing", description:	"While LAN-slide is aware of multiple definitions for the term smurfing, this ruleset only refers to the tactic of playing for someone else drafted in the same tournament whether using someone else’s or your own account."},
            { rules: "Team Captain", description:	"This ruleset refers to Team Captains as the primary point of contact between the Event Coordinator and players in the captain’s team. Where the tournament is listed as a 1 v 1, references to “Team Captain” refers to the individual player."},
            { rules: "Tournament", description:	"A website that LAN-slide officially uses to manage our tournament brackets at http://challonge.com "},
            { rules: "Tournament", description:	"Any bracketed competition that consists of a series of games to determine a winner in the format of N v N players."},
            { rules: "Tournament Match", description:	"The 'versus' segment of a tournament bracket where one team or player versus an opposing team or player through a specified number of game matches to determine an overall winner."},
            { rules: "Tournament Referee", description:	"A role appointed by the LAN-slide team to individuals officially in charge of outcome-based decisions to an individual tournament."},
            { rules: "Tournament Round", description:	"A segment indicating progression of a tournament containing a number of (game) matches." },
		]
	},
	methods: {
		save(item) {
			alert(item.uid);
		}
	}
})

var rulesetapp = new Vue({
	el: "#app2",
	data: {
		rows: [
            { rules: "2.0", description: "All players are eligible to enter any tournament provided they: "},
            { rules: "A.", description:	"Have signed into the event by paying entry fees in full or otherwise surrendered an entry pass. Players are identified by wearing the event wristband;" },
            { rules: "B.", description:	"are not playing for another team or under another pseudonym in the same tournament;" },
            { rules: "C.", description:	"Are not the allocated tournament sponsor or otherwise providing prizes for the tournament;"},
            { rules: "D.", description:	"Are not an event coordinator for any part of the listed event;"},
            { rules: "E.", description:	"Are not a listed tournament referee for the tournament;"},
            { rules: "F.", description:	"Are not banned from attending LAN-slide events;"},
            { rules: "G.", description:	"Are not banned from participating in LAN-slide tournaments."},
            { rules: "H.", description:	"Additional rules may apply on a per tournament basis. Please refer to further sections."},
		]
	},
	methods: {
		save(item) {
			alert(item.uid);
		}
	}
})
