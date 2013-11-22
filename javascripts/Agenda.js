function Agenda($scope) {

	$scope.headers = [ "Time", "Room 1", "Room 2", "Room 3", "Room 4",
			"Room 5", "Room 6", "Room 7" ];

	$scope.rows = [ 
	{
		time : "11:00 - 11:20",
		katas : [ 
          { id : "", mentor : "", title : "", colspan : "1" },
          { id : "", mentor : "", title : "", colspan : "1" },
          { id : "", mentor : "", title : "", colspan : "1" },
          { id : "", mentor : "Otwarcie", title : "", colspan : "1" },
          { id : "", mentor : "", title : "", colspan : "1" },
          { id : "", mentor : "", title : "", colspan : "1" },
          { id : "", mentor : "", title : "", colspan : "1" }
          ]
	},
	{
		time : "11:25 - 11:45",
		katas : [ 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}
     	]
	},
	{
		time : "11:55 - 12:35",
		katas : [ 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}]
	},
	{
		time : "12:35 - 13:30",
		katas : [ 
	      { id : "", mentor : "", title : "", colspan : "1" },
	      { id : "", mentor : "", title : "", colspan : "1" },
	      { id : "", mentor : "", title : "", colspan : "1" },
	      { id : "", mentor : "Przerwa 1", title : "", colspan : "1" },
	      { id : "", mentor : "", title : "", colspan : "1" },
	      { id : "", mentor : "", title : "", colspan : "1" },
	      { id : "", mentor : "", title : "", colspan : "1" }]
	},
	{
		time : "13:30 - 13:50",
		katas : [ 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}
     	]
	},
	{
		time : "14:00 - 14:40",
		katas : [ 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}
     	]
	},
	{
		time : "14:40 - 15:40",
		katas : [ 
         { id : "", mentor : "", title : "", colspan : "1" },
         { id : "", mentor : "", title : "", colspan : "1" },
         { id : "", mentor : "", title : "", colspan : "1" },
         { id : "", mentor : "Przerwa 2", title : "", colspan : "1" },
         { id : "", mentor : "", title : "", colspan : "1" },
         { id : "", mentor : "", title : "", colspan : "1" },
         { id : "", mentor : "", title : "", colspan : "1" }]
	},
	{
		time : "15:40 - 16:00",
		katas : [ 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}
     	]
	},
	{
		time : "16:10 - 16:30",
		katas : [ 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}
     	]
	},
	{
		time : "16:40 - 17:00",
		katas : [ 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}, 
     	{ id : "1", mentor : "@@@", title : "---", colspan : "1"}
     	]
	},
	{
		time : "17:00 - 17:30",
		katas : [ 
         { id : "", mentor : "", title : "", colspan : "1" },
         { id : "", mentor : "", title : "", colspan : "1" },
         { id : "", mentor : "", title : "", colspan : "1" },
         { id : "", mentor : "Zakończenie", title : "", colspan : "1" },
         { id : "", mentor : "", title : "", colspan : "1" },
         { id : "", mentor : "", title : "", colspan : "1" },
         { id : "", mentor : "", title : "", colspan : "1" }]
	},
	];
	
}