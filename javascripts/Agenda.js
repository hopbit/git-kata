function Agenda($scope) {
// ą ć ę ł ń ó ś ź ż
	$scope.headers = [ 
           "Time", 
           "Pragmatists 0.03", 
           "Allegro 0.37", 
           "Allegro 0.38", 
           "Allegro 2.32",
           "Pragmatists 3.29", 
           "Pragmatists Room 4.31", 
           "Helion 5.02"
           ];

	$scope.rows = [ 
	{
		time : "11:00/11:20",
		duration: "20 min",
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
		time : "11:25/11:45",
		duration: "20 min",
		katas : [ 
			{ id : "0", mentor : "Piotr Betkier", title : "git internals", shortDesc: ".git dir & how it works" , colspan : "1" },
			{ id : "0", mentor : "Grzegorz Kubiak", title : "git bisect", shortDesc: "" , colspan : "1"}, 
			{ id : "0", mentor : "Michał Bareja", title : "git branch & git tag", shortDesc: "branches & tags" , colspan : "1"}, 
			{ id : "0", mentor : "Piotr Jasiun", title : "git config", shortDesc: "configs, handful aliases, other tips & tricks" , colspan : "1" },
			{ id : "0", mentor : "Jakub Nabrdalik", title : "git config", shortDesc: "configs, handful aliases, other tips & tricks" , colspan : "1"}, 
			{ id : "0", mentor : "Adam Pierzchała", title : "git merge vs git rebase", shortDesc: "" , colspan : "1"},
			{ id : "0", mentor : "Justyna Sadło", title : "git checkout -b hotfix", shortDesc: "local feature branches" , colspan : "1"}, 
     	]
	},
	{
		time : "11:55/12:35",
		duration: "40 min",
		katas : [ 
     	{ id : "0", mentor : "Rafał Krzewski", title : "egit + eclipse", shortDesc: "" , colspan : "1"}, 
     	{ id : "0", mentor : "Radoslaw Scheibinger", title : "gerrit", shortDesc: "" , colspan : "1"}, 
     	{ id : "0", mentor : "Tomasz Ducin", title : "git ci", shortDesc: "interating git wih jenkins/travis" , colspan : "1"}, 
     	{ id : "0", mentor : "Mateusz Kaczmarek", title : "git everyday", shortDesc: "working with git on daily basis, needs basic git knowdlege, rebase -i" , colspan : "1"}, 
     	{ id : "0", mentor : "Michał Bareja", title : "gitflow", shortDesc: "" , colspan : "1"}, 
     	{ id : "0", mentor : "Krzysztof Adamski", title : "git rebase -i", shortDesc: "interactive rebase & squashing" , colspan : "1"}, 
     	{ id : "0", mentor : "Michał Lewandowski", title : "git refresh", shortDesc: "refresh your git knowdlege/quick introduction to git" , colspan : "1" }
     	]
	},
	{
		time : "12:35/13:30",
		duration: "20 min",
		katas : [ 
         { id : "0", mentor : "", title : "", shortDesc: "" , colspan : "1"}, 
         { id : "0", mentor : "", title : "", shortDesc: "" , colspan : "1"}, 
         { id : "0", mentor : "", title : "", shortDesc: "---" , colspan : "1"}, 
         { id : "", mentor : "Przerwa 1", title : "", shortDesc: "" , colspan : "1" },
	      { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" },
	      { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" },
	      { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" }]
	},
	{
		time : "13:30/13:50",
		duration: "20 min",
		katas : [ 
         { id : "0", mentor : "Piotr Jasiun", title : "git rebase --onto", shortDesc: "" , colspan : "1"}, 
         { id : "0", mentor : "Adam Pierzchała", title : "git rerere", shortDesc: "" , colspan : "1"}, 
         { id : "0", mentor : "Tomasz Ducin", title : "git scrum", shortDesc: "using git on scrum projects" , colspan : "1"},
         { id : "0", mentor : "Jakub Nabrdalik", title : "git internals", shortDesc: ".git dir & how it worsk" , colspan : "1" },
         { id : "0", mentor : "Justyna Sadło", title : "git checkout -b hotfix", shortDesc: "local feature branches" , colspan : "1"}, 
         { id : "0", mentor : "Grzegorz Kubiak", title : "git filter-branch", shortDesc: "" , colspan : "1" },
         { id : "0", mentor : "Michał Lewandowski", title : "git stash", shortDesc: "" , colspan : "1"}
     	]
	},
	{
		time : "14:00/14:40",
		duration: "40 min",
		katas : [ 
			{ id : "0", mentor : "Mateusz Kaczmarek", title : "git rebase -i", shortDesc: "interactive rebase & squashing)" , colspan : "1"}, 
			{ id : "0", mentor : "Paweł Sanjuan Szklarz", title : "git submodules", shortDesc: "" , colspan : "1"}, 
			{ id : "0", mentor : "Michał Bareja", title : "git undo", shortDesc: "(undoing changes: revert, reset, reflog, cherry-pick, amend)" , colspan : "1"}, 
			{ id : "0", mentor : "Maciej Opała", title : "gitflow", shortDesc: "" , colspan : "1"}, 
			{ id : "0", mentor : "Jakub Nabrdalik", title : "git rebase -i", shortDesc: "interactive rebase & squashing)" , colspan : "1"}, 
			{ id : "0", mentor : "Krzysztof Adamski", title : "gitlab", shortDesc: "" , colspan : "1"},
			{ id : "0", mentor : "Mateusz Harasymczuk", title : "branching model", shortDesc: "" , colspan : "1"}
     	]
	},
	{
		time : "14:40/15:40",
		katas : [ 
	         { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" },
	         { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" },
	         { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" },
	         { id : "", mentor : "Przerwa 2", title : "", shortDesc: "" , colspan : "1" },
	         { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" },
	         { id : "", mentor : "", title : "", shortDesc: "---" , colspan : "1"}, 
	         { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" }
         ]
	},
	{
		time : "15:40/16:00",
		katas : [ 
	         { id : "0", mentor : "Janek Kowalski", title : "legit", shortDesc: "" , colspan : "1"}, 
			{ id : "0", mentor : "Łukasz Szczęsny", title : "gitolite", shortDesc: "" , colspan : "1" },
			{ id : "0", mentor : "Paweł Sanjuan Szklarz", title : "subtree", shortDesc: "" , colspan : "1"}, 
			{ id : "0", mentor : "Mariusz Smykuła", title : "tig", shortDesc: "interaktywny git" , colspan : "1"}, 
			{ id : "0", mentor : "Piotr Betkier", title : "git internals", shortDesc: ".git dir & how it works" , colspan : "1" },
			{ id : "0", mentor : "Jakub Nabrdalik", title : "git config", shortDesc: "configs, handful aliases, other tips & tricks" , colspan : "1"}, 
			{ id : "0", mentor : "Grzegorz Kubiak", title : "git bisect", shortDesc: "" , colspan : "1"} 
     	]
	},
	{
		time : "16:10/16:30",
		katas : [ 
         { id : "0", mentor : "Michał Bareja", title : "git branch & git tag", shortDesc: "branches & tags" , colspan : "1"}, 
         { id : "0", mentor : "Mateusz Harasymczuk", title : "pull requests", shortDesc: "git cola" , colspan : "1"}, 
         { id : "0", mentor : "Piotr Jasiun", title : "git config", shortDesc: "configs, handful aliases, other tips & tricks" , colspan : "1" },
         { id : "0", mentor : "Łukasz Szczęsny", title : "git-annex", shortDesc: "" , colspan : "1" },
         { id : "0", mentor : "Adam Pierzchała", title : "git rerere", shortDesc: "" , colspan : "1"}, 
         { id : "0", mentor : "Tomasz Ducin", title : "git scrum", shortDesc: "using git on scrum projects" , colspan : "1"},
         { id : "0", mentor : "Janek Kowalski", title : "legit", shortDesc: "" , colspan : "1"} 
     	]
	},
	{
		time : "16:40/17:00",
		katas : [ 
		         { id : "0", mentor : "Adam Pierzchała", title : "git rerere", shortDesc: "" , colspan : "1"}, 
		         { id : "0", mentor : "Michał Lewandowski", title : "git stash", shortDesc: "" , colspan : "1"},
		         { id : "0", mentor : "Mateusz Harasymczuk", title : "release management with git", shortDesc: "---" , colspan : "1"},
		         { id : "0", mentor : "Grzegorz Kubiak", title : "git filter-branch", shortDesc: "" , colspan : "1" },
		         { id : "0", mentor : "Janek Kowalski", title : "github", shortDesc: "git cola" , colspan : "1"}, 
		         { id : "0", mentor : "Paweł Sanjuan Szklarz", title : "subtree", shortDesc: "" , colspan : "1"}, 
		         { id : "1", mentor : "Mariusz Smykuła", title : "tig", shortDesc: "interaktywny git" , colspan : "1"} 
     	]
	},
	{
		time : "17:00/17:30",
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
