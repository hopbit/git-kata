function Agenda($scope) {
// ą ć ę ł ń ó ś ź ż
	$scope.headers = [ "Time", "Room 1", "Room 2", "Room 3", "Room 4",
			"Room 5", "Room 6", "Room 7" ];

	$scope.rows = [ 
	{
		time : "11:00 - 11:20",
		katas : [ 
          { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" },
          { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" },
          { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" },
          { id : "1", mentor : "Otwarcie", title : "", shortDesc: "" , colspan : "1" },
          { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" },
          { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" },
          { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" }
          ]
	},
	{
		time : "11:25 - 11:45",
		katas : [ 
     	{ id : "#", mentor : "Tomasz Ducin", title : "git init", shortDesc: "---" , colspan : "1"}, 
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"}, 
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"}, 
     	{ id : "#", mentor : "Adam Pierzchała", title : "git init", shortDesc: "---" , colspan : "1"}, 
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"}, 
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"},
     	{ id : "#", mentor : "Michał Bareja", title : "git rebase -i", shortDesc: "" , colspan : "1"} 
     	]
	},
	{
		time : "11:55 - 12:35",
		katas : [ 
     	{ id : "#", mentor : "Justyna Sadło", title : "local branches", shortDesc: "" , colspan : "1"}, 
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"}, 
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"}, 
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"}, 
     	{ id : "#", mentor : "Jakub Nabrdalik", title : "git rebase -i", shortDesc: "interactive rebase" , colspan : "1"}, 
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"}, 
     	{ id : "#", mentor : "Michał Lewandowski", title : "git init", shortDesc: "Odśwież sobie gita" , colspan : "1"}
     	]
	},
	{
		time : "12:35 - 13:30",
		katas : [ 
	      { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" },
	      { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" },
	      { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" },
	      { id : "", mentor : "Przerwa 1", title : "", shortDesc: "" , colspan : "1" },
	      { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" },
	      { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" },
	      { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" }]
	},
	{
		time : "13:30 - 13:50",
		katas : [ 
     	{ id : "#", mentor : "Michał Bareja", title : "---", shortDesc: "" , colspan : "1"}, 
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"}, 
     	{ id : "1", mentor : "Tomasz Ducin", title : "git init", shortDesc: "---" , colspan : "1"},
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"}, 
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"}, 
     	{ id : "4", mentor : "Adam Pierzchała", title : "git init", shortDesc: "---" , colspan : "1"}, 
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"}
     	]
	},
	{
		time : "14:00 - 14:40",
		katas : [ 
     	{ id : "7", mentor : "Michał Lewandowski", title : "git init", shortDesc: "Odśwież sobie gita" , colspan : "1"}, 
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"}, 
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"}, 
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"}, 
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"}, 
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"},
     	{ id : "7", mentor : "Jakub Nabrdalik", title : "git rebase -i", shortDesc: "interactive rebase" , colspan : "1"}
     	]
	},
	{
		time : "14:40 - 15:40",
		katas : [ 
         { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" },
         { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" },
         { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" },
         { id : "", mentor : "Przerwa 2", title : "", shortDesc: "" , colspan : "1" },
         { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" },
         { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" },
         { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" }]
	},
	{
		time : "15:40 - 16:00",
		katas : [ 
     	{ id : "1", mentor : "Adam Pierzchała", title : "git rerere", shortDesc: "---" , colspan : "1"}, 
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"}, 
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"}, 
     	{ id : "1", mentor : "Michał Lewandowski", title : "git stash", shortDesc: "---" , colspan : "1"}, 
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"}, 
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"}, 
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"}
     	]
	},
	{
		time : "16:10 - 16:30",
		katas : [ 
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"}, 
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"}, 
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"}, 
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"}, 
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"}, 
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"}, 
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"}
     	]
	},
	{
		time : "16:40 - 17:00",
		katas : [ 
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"}, 
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"}, 
     	{ id : "1", mentor : "Adam Pierzchała", title : "git rerere", shortDesc: "---" , colspan : "1"},
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"}, 
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"}, 
     	{ id : "1", mentor : "Michał Lewandowski", title : "git stash", shortDesc: "---" , colspan : "1"}, 
     	{ id : "#", mentor : "---", title : "---", shortDesc: "" , colspan : "1"}
     	]
	},
	{
		time : "17:00 - 17:30",
		katas : [ 
         { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" },
         { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" },
         { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" },
         { id : "", mentor : "Zakończenie", title : "", shortDesc: "" , colspan : "1" },
         { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" },
         { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" },
         { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" }]
	},
	];
	
}