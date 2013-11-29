function Mentors($scope) {
// ą ć ę ł ń ó ś ź ż
	$scope.mentors = [ 
	{
		id : "piotr-betkier", name : "Piotr Betkier", homepage : "http://pbetkier.blogspot.com", img : "true",
		bio : "I am a software developer who loves working in agile environments and creating clean code that works. I am not afraid of choosing the right tool for the job, and so far those were mostly Java and Python technologies. Git is in my opinion the right tool for version control currently. I was born perfectionist, but taught myself pragmatism over time. When not developing software, I co-organize <a href='http://pywaw.org'>PyWaw</a> meetings and spend my time actively. I do my commits in Allegro Group."
	},
	{
		id : "piotr-jasiun", name : "Piotr Jasiun", homepage : "https://github.com/pjasiun", img : "true",
		bio : "I started my career as a Freelance Web Designer then switched to mobiles as an Android Developer in Polidea. I worked in CERN integrating C++ SCADA systems with JavaScript. I’m currently a JavaScript Developer on the CKEditor open source project. I love working in small companies with people who are passionate about the high-tech industry. I’m astonished by how quickly technology is changing these days, which is why I’m an advocate of Agile Methodologies. I also have a fondness for application usability. I caught the git bug after the first Kata conference and I intend to convey this interest onto others."
	},	
	{
		id : "rafal-krzewski", name : "Rafał Krzewski",	homepage : "http://www.ohloh.net/accounts/rkrzewski", img : "true",
		bio : "I co-run a small IT company for over 10 years. In such environment I had the chance to gain skills in various areas of software life cycle from design, project management, development, build engineering, continuous integration all the way to deployment and maintenance. I have worked with CVS and SVN before switching to git. I was responsible for migrating our repositories, and training my coworkers to use the new revision management tools. Eclipse is my IDE of choice when doing Java / Scala development. While I prefer to use git on command line for more advanced operations, I find EGit - the git client integrated in Eclipse to be adequate and quite convenient for the bread-and-butter commit - fetch - rebase - push workflow. In my session, I'm going to demonstrate how to install, configure and use EGit for the tasks it's best suited for."
	},
	{
		id : "jakub-nabrdalik",	name : "Jakub Nabrdalik", homepage : "http://blog.solidcraft.eu", img : "true",
		bio : " I am a software developer who cares about Software Craftsmanship and Domain Design. I've been Practicing Test-driven development and Pair programming since 2005. I work at <a href='http://touk.pl'>TouK</a>, where I code (Groovy and Java), lead teams, manage projects and do other fun stuff. Sometimes I also give talks at Java conferences, WJUG meetings, and hackathons. I strongly believe in benefits of good work, clean code and maintainable software. <br/><br/>You can find more at <a href='http://solidcraft.eu'>solidcraft.eu</a>."
	},
	{
		id : "grzegorz-kubiak", name : "Grzegorz Kubiak", homepage : "#", img : "true",
		bio : "I am a Java developer who always tries new experiences. I have had adventures with Android and C++. I have written my own domain specific language with antlr3. Some time ago I have started using git. At the git-kata workshops I am going to show you few interesting commands which I found being very useful.<br/><br/>Besides all, I am also happy user of Gentoo Linux :)"
	},
	{
		id : "justyna-sadlo", name : "Justyna Sadło", homepage : "#", img : "true",
		bio : "I am a student at the Warsaw University of Technology and a software developer in my free time ;) I like to learn new things - especially new languages and tools that make my work easier. Besides IT I dance lindy hop and do other forms of physical activity."
	},
	{
		id : "krzysztof-adamski", name : "Krzysztof Adamski", homepage : "http://k.japko.eu", img : "false",
		bio : "Linux Systems Engineer currently working in ISP company on custom made IPTV solution. At work, I spend most of the time as an Android Platform and Embedded Linux Developer working on some low level aspects of Android and Linux based SetTopBox devices. Since I’m a technical leader of the IPTV department, I’m also involved in many other activities ranging from code reviews, Linux server management to JavaScript front-end and Python/Django back-end development."
	},
	{
		id : "lukasz-szczesny", name : "Łukasz Szczęsny", homepage : "https://wybcz.pl/blog/", img : "true",	
		bio : "I am a system administrator specializing in GNU/Linux environment. I work at the University of Warsaw. I love automation and managing configuration with Git :) Once upon a time I migrated large codebase from CVS to Subversion and eventually to Git."
	},
	{
		id : "mariusz-smykula", name : "Mariusz Smykuła", homepage : "#", img : "false",	
		bio : "TBD"
	},
	{
		id : "michal-lewandowski", name : "Michał Lewandowski", homepage : "#", img : "true",	
		bio : "I don't like texts full of buzzwords. You will not find them here.<br/><br/>I am walking around Java. If you want to know more, talk with me.<br/><br/>I would like you, to remember one thing. I belive that we are craftsmen. I belive in rising the bar of professional software development by practicing it and helping others learn the craft."
	},
	{
		id : "michal-bareja", name : "Michał Bareja", homepage : "https://twitter.com/MichaelBareja", img : "true",	
		bio : "Java developer who is always focused on delivering code of the highest possible quality. Had a year long adventure with Ruby and most recently started hacking in JavaScript with AngularJS. Member of Pragmatists team.<br/><br/>Favourite way of working: test driving in a pair.<br/><br/>Favourite git command: `git config --global branch.autosetuprebase always`"
	},
	{
		id : "mateusz-kaczmarek", name : "Mateusz Kaczmarek", homepage : "#", img : "false",
		bio : "TBD"
	},
	{
		id : "pawel-sanjuan-szklarz", name : "Paweł Sanjuan Szklarz", homepage : "#", img : "false",
		bio : "TBD"
	},
	{
		id : "jan-kowalski", name : "Jan Kowalski", homepage : "http://blog.jankowalski.pl", img : "false",
		bio : "I develop software! I have this unfortunate feeling that nothing works out-of-the-box for me. Every new technology I try to adopt is like dealing with tons of issues. I need to have my elegant code quickly and easily running. I hate pathos. I hate git. I know it can really hurt you. That is why I'll show you how to work with it human way. I participate in github open source project fabtools. In spare time I play squash."
	},
	{
		id : "maciej-opala", name : "Maciej Opała", homepage : "#", img : "false",
		bio : "TBD"
	},
	{
		id : "adam-pierzchala", name : "Adam Pierzchała", homepage : "#", img : "false",
		bio : "I am a Software Developer at <a href='http://www.pragmatists.pl/'>Pragmatists</a>, where on every day basis I use Agile and Extreme Programming techniques, including TDD and Pair Programming. After work I make my insane ideas come true, which are making games, creating algorithms for automatic terrain generation and conquering the world. For all of them I use git."
	},
	{
		id : "mateusz-harasymczuk", name : "Mateusz Harasymczuk", homepage : "http://www.harasymczuk.pl/", img : "true",
		bio : "Hi, my name is Matt and I am an Developer Evangelist. I try to commit to my work and every single task. It gives me a huge satisfaction and power to live my life. Moreover I try to share my passion with my colleagues and everyone around me. I really do believe in team work. I hope, that I'll be able to infect you with my optimism. In return I expect to learn as much as it is possible from you! I really do believe in Agile, Scrum, Clean Code, Strict Coding Styles and Open Standards!"
	},
	{
		id : "tomasz-ducin", name : "Tomasz Ducin", homepage : "http://symfony-world.blogspot.com/", img : "true",
		bio : "I am a lead frontend developer at Gemius where we deal with big data analysis platforms. Mostly I work in Python & JavaScript, but I also have growing backend interests. I praise modern software development concepts like TDD, Continuous Integration, Scrum and so on, because our job is not only to *write* the code. Since I've started to use git, I can't imagine software development without it. SVN was ok, but it's git time now ;)<br/><br/>I listen to music all day long, visit cinema/theatre in my spare time and love to travel abroad on weekends. Last but not least, (Monty) Python rules!"
	}
	];
	
}
