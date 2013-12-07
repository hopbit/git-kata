function Agenda($scope) {
// ą ć ę ł ń ó ś ź ż
	$scope.headers = [ 
           "Time", 
           "Pragmatists 0.03", 
           "Allegro 0.37", 
           "Allegro 0.38", 
           "Pragmatists 2.32", 
           "Allegro 3.29",
           "Pragmatists 4.31", 
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
          { id : "1", mentor : "Otwarcie (Aula)", title : "", shortDesc: "" , colspan : "1" },
          { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" },
          { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" },
          { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" }
          ]
	},
	{
		time : "11:25/11:45",
		duration: "20 min",
		katas : [ 
		         { id : "22", mentor : "Michał Bareja", title : "git branch & git tag", shortDesc: "branches & tags" , colspan : "1"},
			{ id : "10", mentor : "Piotr Betkier", title : "git internals", shortDesc: ".git dir & how it works" , colspan : "1" },
			{ id : "23", mentor : "Grzegorz Kubiak", title : "git bisect", shortDesc: "" , colspan : "1"}, 
			{ id : "0", mentor : "Adam Pierzchała", title : "git merge vs git rebase", shortDesc: "" , colspan : "1"},
			{ id : "3", mentor : "Jakub Nabrdalik", title : "Configs, handful aliases, other tips & tricks", shortDesc: "" , colspan : "1"}, 
			{ id : "15", mentor : "Piotr Jasiun", title : "git rebase --onto", shortDesc: "" , colspan : "1"}, 
			{ id : "9", mentor : "Justyna Sadło", title : "git checkout -b hotfix", shortDesc: "local feature branches" , colspan : "1"}, 
     	]
	},
	{
		time : "11:55/12:35",
		duration: "40 min",
		katas : [ 
		         { id : "20", mentor : "Michał Bareja", title : "gitflow", shortDesc: "" , colspan : "1"},
     	{ id : "14", mentor : "Rafał Krzewski", title : "egit + eclipse", shortDesc: "" , colspan : "1"}, 
     	{ id : "12", mentor : "Radoslaw Scheibinger", title : "gerrit",
            shortDesc: "Gerrit is an advanced opensource for collaborative code reviews. In the git gerrit kata you will learn the basics of how to use it" ,
            colspan : "1"},
     	{ id : "0", mentor : "Mateusz Kaczmarek", title : "git everyday", shortDesc: "working with git on daily basis, needs basic git knowdlege, rebase -i" , colspan : "1"}, 
     	{ id : "6", mentor : "Tomasz Ducin", title : "continous integration with git", shortDesc: "integrating git wih jenkins/travis" , colspan : "1"}, 
     	{ id : "32", mentor : "Krzysztof Adamski", title : "git rebase -i", shortDesc: "interactive rebase & squashing" , colspan : "1"},
     	{ id : "19", mentor : "Michał Lewandowski", title : "git refresh", shortDesc: "refresh your git knowdlege/quick introduction to git" , colspan : "1" }
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
		         { id : "29", mentor : "Adam Pierzchała", title : "git merge vs git rebase", shortDesc: "" , colspan : "1"}, 
		         { id : "10", mentor : "Piotr Betkier", title : "git internals", shortDesc: ".git dir & how it works" , colspan : "1" },
		         { id : "27", mentor : "Mariusz Smykuła", title : "tig", shortDesc: "interaktywny git" , colspan : "1"}, 
		         { id : "24", mentor : "Grzegorz Kubiak", title : "git filter-branch", shortDesc: "" , colspan : "1" },
		         { id : "5", mentor : "Jakub Nabrdalik", title : "Git internals", shortDesc: ".git dir & how it works" , colspan : "1" },
         { id : "9", mentor : "Justyna Sadło", title : "git checkout -b hotfix", shortDesc: "local feature branches" , colspan : "1"}, 
         		{ id : "18", mentor : "Michał Lewandowski", title : "git stash", shortDesc: "" , colspan : "1"}
     	]
	},
	{
		time : "14:00/14:40",
		duration: "40 min",
		katas : [ 
		         { id : "21", mentor : "Michał Bareja", title : "git undo", shortDesc: "undoing changes: revert, reset, reflog, cherry-pick, amend" , colspan : "1"},
		         { id : "25", mentor : "Mateusz Harasymczuk", title : "branching model", shortDesc: "" , colspan : "1"},
			{ id : "0", mentor : "Mateusz Kaczmarek", title : "git rebase -i", shortDesc: "interactive rebase & squashing)" , colspan : "1"}, 
			{ id : "13", mentor : "Maciej Opała", title : "gitflow", shortDesc: "" , colspan : "1"}, 
			{ id : "4", mentor : "Jakub Nabrdalik", title : "Git rebase -i", shortDesc: "interactive rebase & squashing)" , colspan : "1"}, 
			{ id : "11", mentor : "Krzysztof Adamski", title : "gitlab", shortDesc: "" , colspan : "1"},
			{ id : "1", mentor : "Paweł Sanjuan Szklarz", title : "git submodules", shortDesc: "" , colspan : "1"} 
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
			{ id : "7", mentor : "Łukasz Szczęsny", title : "gitolite", shortDesc: "" , colspan : "1" },
			{ id : "30", mentor : "Janek Kowalski", title : "legit", shortDesc: "" , colspan : "1"}, 
			{ id : "27", mentor : "Mariusz Smykuła", title : "tig", shortDesc: "interaktywny git" , colspan : "1"}, 
			{ id : "23", mentor : "Grzegorz Kubiak", title : "git bisect", shortDesc: "" , colspan : "1"},
			{ id : "3", mentor : "Jakub Nabrdalik", title : "Configs, handful aliases, other tips & tricks", shortDesc: "" , colspan : "1"}, 
			{ id : "15", mentor : "Piotr Jasiun", title : "git rebase --onto", shortDesc: "" , colspan : "1"}, 
			{ id : "2", mentor : "Paweł Sanjuan Szklarz", title : "subtree", shortDesc: "" , colspan : "1"} 
     	]
	},
	{
		time : "16:10/16:30",
		katas : [ 
         { id : "22", mentor : "Michał Bareja", title : "git branch & git tag", shortDesc: "branches & tags" , colspan : "1"},
         { id : "26", mentor : "Mateusz Harasymczuk", title : "pull requests", shortDesc: "git cola" , colspan : "1"}, 
         { id : "30", mentor : "Janek Kowalski", title : "legit", shortDesc: "" , colspan : "1"}, 
         { id : "28", mentor : "Adam Pierzchała", title : "git rerere", shortDesc: "" , colspan : "1"}, 
         { id : "17", mentor : "Tomasz Ducin", title : "git scrum", shortDesc: "using git on scrum projects" , colspan : "1"},
         { id : "16", mentor : "Piotr Jasiun", title : "git config", shortDesc: "configs, handful aliases, other tips & tricks" , colspan : "1" },
         { id : "8", mentor : "Łukasz Szczęsny", title : "git-annex", shortDesc: "" , colspan : "1" }
     	]
	},
	{
		time : "16:40/17:00",
		katas : [ 
		         { id : "28", mentor : "Adam Pierzchała", title : "git rerere", shortDesc: "" , colspan : "1"}, 
		         { id : "0", mentor : "Mateusz Harasymczuk", title : "release management with git", shortDesc: "---" , colspan : "1"},
		         { id : "31", mentor : "Janek Kowalski", title : "github", shortDesc: "git cola" , colspan : "1"}, 
		         { id : "24", mentor : "Grzegorz Kubiak", title : "git filter-branch", shortDesc: "" , colspan : "1" },
		         { id : "17", mentor : "Tomasz Ducin", title : "git scrum", shortDesc: "using git on scrum projects" , colspan : "1"},
		         { id : "2", mentor : "Paweł Sanjuan Szklarz", title : "subtree", shortDesc: "" , colspan : "1"}, 
		         { id : "18", mentor : "Michał Lewandowski", title : "git stash", shortDesc: "" , colspan : "1"}
     	]
	},
	{
		time : "17:00/17:30",
		katas : [ 
         { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" },
         { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" },
         { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" },
         { id : "", mentor : "Zakończenie (Aula)", title : "", shortDesc: "" , colspan : "1" },
         { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" },
         { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" },
         { id : "", mentor : "", title : "", shortDesc: "" , colspan : "1" }]
	},
	];
	
}
