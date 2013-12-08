function Kata($scope) {
	// ą ć ę ł ń ó ś ź ż

	$scope.katas = [ 
     {
		id : "1",
		title : "Git submodules",
		description : "<u>Motivation</u><br/><br/>Git submodules is essential in several use cases: Version relation between libraries on a commit granularity level, Exposition of isolated components to external providers without exposition of the hole codebase.<br/><br/><u>Scenario</u><br/><br/>Start from a single application and two libraries separated. Next, integrate the libraries as submodules of the application and start versioning on a commit level. We will make several changes to feel the git-submodule workflow. At the end, we will return to the independent modules configuration.<br/><br/>"
     },
     {
    	 id : "2",
    	 title : "Git subtree",
    	 description : "<b>Motivation</b><br/><br/>Git submodule introduce a additional level of abstraction to our repositories. With git-tree we can forget about the external relations and just focus in the code. But nothing is free, the price come in the new merge-tree strategy.<br/><br/><b>Scenario</b><br/><br/>Start from a single application and two libraries separated. Next, integrate the libraries as subtrees of the application and start developing. We will make several changes to feel the git-subtree workflow. At the end, we will return to the independent modules configuration.<br/><br/>"
     },
     {
    	 id : "3",
    	 title : "Configs, handful aliases, other tips & tricks",
    	 description : "<b>Motywacja</b><br/><br/>Siadasz obok człowieka, żeby zrobić jakiś pair-programming albo generalnie pomóć mu w gicie, i patrzysz jak się męczy. Albo jak twierdzi że git to tylko z IDE. Zwykle znaczy to, że nie skonfigurował sobie środowiska. Git jest naprawdę dobrze zbudowany, ale człowiek który napisał te całe 'UI' miszczem usability nie był (to nie Torvalds, Torvalds zrobił bebechy). W związku z tym, trzeba czasem sobie trochę pomóć i o tym będzie ta kata.<br/><br/><b>Scenariusz</b><br/><br/>Zaczniemy od zawartości .git/config, ustwienia kim jestem per projekt, kolorków, i domyślnego edytora, a potem pojedziemy z aliasami, różnymi fajnymi i nie tylko."
     },
     {
    	 id : "4",
    	 title : "Git rebase -i",
    	 description : "<b>Motywacja</b><br/><br/>Interaktywny rebase w Gicie pozwala na bardzo zwinne operowanie strukturą historii w poukładany i prosty sposób. Kata ma za zadanie pokazać jak posługiwać się instrukcją, jakie mamy możliwości i na co uważać.<br/><br/><b>Scenariusz</b><br/><br/>Zaczynamy od przełożenia jednego commita na inny branch. Następnie przekładamy zakres commitów. Później przekładamy brancha. Kolejny etap to zmiana kolejności commitów, usuniecie jednego z nich. Na koniec dowiemy się kiedy i jak robić zamieszanie w historii, a kiedy nie wolno."
     },
     {
    	 id : "5",
    	 title : "Git internals: .git dir & how it works",
    	 description : "<b>Motywacja</b><br/><br/>Początkujący gitowcy często narzekają, że polecenia nie mają sensu, a sam git jest zakręcony jak słoik. Tymczasem bebechy gita są banalnie proste i super skuteczne. To tylko API jest delikatnie mówiąc przekombinowane. Jeśli poznać zawartość katalogu .git i co się w nim dzieje, można dużo lepiej zrozumieć gita i jego API. W sytuacji awaryjnej, pomoże nam to odzyskać dane i lub zrobic to co chcemy, gdy w innej sytuacji musielibyśmy najpierw nauczyć się nowej komendy (potencjalnie niebezpiecznej).<br/><br/><b>Scenariusz</b><br/>Przejdziemy przez zawartość katalogu .git i zobaczymy co gdzie leży, jak się uzupełnia, jak modyfikować gita bez używania poleceń (edytorem tekstu) i co z tego wszystkiego wynika (np. jak się przestać bać, robić prosty backup, albo zrozumieć git reset). Ponadto przedstawione zostaną obiekty w gicie dzięki poznaniu których zrozumiemy dlaczego jest jednym z najlepszych systemów kontroli wersji."
     },
     {
    	 id : "6",
    	 title : "continous integration with git",
    	 description : "In the beginning we'll say a few sentences about CI - if there'd be anyone who doesn't know what it is or what are the benefits. Kata will be divided into 2 parts: <a href='http://travis-ci.org/' target='_blank'>travis</a> and <a href='http://jenkins-ci.org/' target='_blank'>jenkins</a>. Both are free & popular CI platforms, designed for different types of projects. We'll take a very quick tour over functionalities of each tool and try to use them with our repos afterwards. I'd expect you to have a registered github account (this is required for travis integration) as well as jenkins deployed locally on your computers. We'll run some tests in python, so please do have python installed with nosetests (test runner).<ul><li><a href='https://github.com/join'>registering github account</a></li><li><a href='https://wiki.jenkins-ci.org/display/JENKINS/Installing+Jenkins'>installing jenkins</li><li><a href='http://nose.readthedocs.org/en/latest/'>installing nosetests</a></li></ul>"
     },
     {     
    	 id : "7",
    	 title : "gitolite",
    	 description : "We will setup fully-featured Git hosting with very fine-grained access control on our computers in 20 minutes! Then we will try to create some repositories and configure server-side hooks for them.<br/><br/>You need to have both <a href='http://www.vagrantup.com/'>Vagrant</a> and <a href='https://www.virtualbox.org/'>VirtualBox</a> installed on your computer."
     },
     {     
    	 id : "8",
    	 title : "git-annex",
    	 description : "How to store large binary files with Git? How to manage gigabytes of your favourite TV Shows on multiple locations? git-annex is the anwser!<br/><br/> You need to have both <a href='http://www.vagrantup.com/'>Vagrant</a> and <a href='https://www.virtualbox.org/'>VirtualBox</a> installed on your computer."
     },
     {     
    	 id : "9",
    	 title : "git checkout -b hotfix",
    	 description : "Feature branches are one of the options for fast hotfix development. They may become our best friend, but also may lead to branch hell.<br/><br/> This Kata will be divided into three parts. The first part will focus on the standard workflow of feature branches. In the second part we will look over the different options that we have to smoothen our feature branch history or prepare our feature as a single commit (useful when we use various tools). The Kata will end with a short discussion when to use feature branches and when to avoid them."
     },
     {     
    	 id : "10",
    	 title : "git internals",
    	 description : "Git is not a version control system. Git is actually an interesting filesystem with a VCS-like interface. It's fascinating. And it's pretty simple.<br/><br/> I will present git from the internals point of view. We will dive into .git directory and see what happens under the hood during our everyday work. Ever tried making a commit without calling git commit command? After this kata git will no longer be a magic black box for you. You will be able to solve various problems with git more easily.<br/><br/>If you haven't thought about git being a NoSQL key-value store yet, then this kata is for you."
     },
     {     
    	 id : "11",
    	 title : "gitlab",
    	 description : "GitLab is a web based, self hosted Git management application. It's very similar to GitHub but it's an open source project. If you are interested in using GitHub-like workflow but you want to keep your repositories on your own servers and you don't want to pay any license costs, GitLab is for you.<br/><br/>This kata won't show you how to install GitLab. Instead it will walk you through it's features, show some of it's weaknesses and describe the workflow you can use in your team. All you need in order to participate is a web browser installed and a SSH public key generated. Git client may be useful, too."
     },
     {
    	 id: "12",
    	 title: "gerrit",
    	 description: "Gerrit is an advanced opensource web application for the collaborative code reviews. </br></br>In this kata you will learn how gerrit can help with improving quality of the codebase in your repository. I will explain how gerrit workflow looks like, what is great and what are the main pitfalls of this tool"
     },
     {
    	 id: "13",
    	 title: "git flow",
    	 description: "Często w trakcie pracy z systemem kontroli wersji dochodzisz do wniosku: 'To powinno być w branchu', 'Releasy powinny wychodzić z innego brancha', 'Gdzieś musimy przechowywać stabilne wersje'. Git to nie SVN! Praca z tym narzędziem jest o wiele prostsza, a łatwość tworzenia gałęzi powinna zachęcać do ich wykorzystywania. Właśnie tą cechę gita bardzo mocno wykorzystuje git flow - wzorzec pracy z gitem - stanowiący odpowiedź na nurtujące Cię pytania.<br/><br/> W trakcie warsztatu szczegółowo zapoznamy się z modelem git flow, jego wadami i zaletami, a także nauczymy się z niego korzystać.<br/><br/>Do aktywnego uczestnictwa w warsztatach potrzebna będzie zainstalowana wtyczka <a href='https://github.com/nvie/gitflow/wiki/Installation'>git-flow</a>"
     },
     {
    	 id: "14",
    	 title: "Eclipse + EGit",
    	 description: "You are using Eclipse day-in and day-out and store your code in git. When EGit 1.0.0 was released, you were eager to try it, but you found the interface puzzling, strange errors pop up and some operations don't appear to do anything at all. Since then you (im-) patiently switch between Eclipse and terminal to get things done. I have good news: EGit 3.0 (shipped with Eclipse 4.3) works decently, and can save quite a bit of your time.<br/><br/> As per-requisites for this workshop, you need basic knowledge of git and a PC with Eclipse Kepler (4.3) installed. We'll practice creating local repositories, using 'Staging', 'History' and 'Commit viewer' views; working with branches: switching, merging and rebasing including conflict resolution. Finally we'll try working with remote repositories: connecting, fetching and pushing. We'll also discuss operations that are (for now) easier accomplished using command line client."
     },
     {
    	 id: "15",
    	 title: "git rebase --onto",
    	 description: "Git rebase is pretty powerfull tool, but sometimes you can get confused and feel that it works magically. If you feel that 'git rebase master' and 'git rebase --onto commit-b commit-a' are two totally different commands come and see they are not. You will learn what the hell will happen after 'git rebase --onto branch-a branch-b branch-c'."
     },
     {
    	 id: "16",
    	 title: "git config",
    	 description: "On this kata we will talk about git config file. Starting from the basic configuration, going through basic and advanced aliases I will present how to work with git more efficient. You will learn how to fetch, reset two branches and do rebase using one command. All of aliases I will present, I use in everyday work."
     },
     {
    	 id: "17",
    	 title: "git / scrum",
    	 description: "This workshop will not be a typical kata, rather a presentation and discussion. It will cover following topics:<br/><br/> * common branching traps that occur during the sprint<br/> * how to overcome the above - comparison of different merging models<br/> * useful git-related tools enhancing team's performance (code review, continuous integration) and their relation with scrum/git workflow<br/>"
     },
     {
    	 id: "18",
    	 title: "Git stash",
    	 description: "I have to admit, that the git stash is a simple and easy to use tool. In this 20 minutes kata I would like to discover, possible usages of this command. I would like to explore and experiment with all those switches that are available for this command.<br/><br/> Bring your computer because there will be no slieds, only command line fun."
     },
     {
    	 id: "19",
    	 title: "Git refresh",
    	 description: "There is no such command as git refresh. This 40 minutes kata is designed for people who would like to refresh their knowladge about git. I would also welcome people, who are starting with git.<br/><br/> I would like to split this kata in three parts: - Local operations with files such as commiting, adding, checking out.<br/><br/> - Local operations witch branches which mean merging and rebasing.<br/> - Remote operations such as pulling, pushing and fetching.<br/><br/> I would not go deep into those operations. My goal is to pass you an idea of git.<br/><br/> Bring your computer because there will be no slides, only command line fun.<br/><br/>"
     },
     {
         id: "20",
         title: "git flow",
         description: "Wszyscy wiemy jak zrobić commit na branchu i wypushować go remote repo. Ale jak poradzić sobie z kilkoma branchami? Co gdy do jednego repo commituje wielu developerów którzy pracują nad różnymi nowymi funkcjonalnościami? Do tego mamy jeszcze brancha który odzwierciedla stan aktualnej produkcji i chcemy zrobić w nim poprawkę ale tak żeby nie zgubiła się w wersji developerskiej. Gitflow odpowiada na te wszystkie problemy poprzez narzucanie sensownego modelu branchowania i dodanie kilku komend które znacznie ułatwiają połapanie się w tym całym chaosie." +
             "<br/><br/>" +
             "Nauczymy się tworzyć feature branche przy pomocy gitflowa oraz jak sprawnie się między niemi przełączać i dzielić z innymi developerami. Kolejny krok to release. Sprawdzimy jak gitflow może pomóc nam w tej sytuacji. Gdzie powinny trafić commity robione podczas release'u, Kiedy powinniśmy otagować repozytorium oraz jak cofnąć nieudany release. Na koniec poznamy zestaw komend \"gitflow hotfix ...\". Dowiemy się jak zarządzać poprawkami do wersji produkcyjnej i dlaczego używać do tego gitflowa zamiast samemu wykonywać merge'e i cherry-pick'i."
     },
     {
         id: "21",
         title: "git undo",
         description: "\"Oops, ten commit nie miał tak wyglądać\", \"Zapomniałem o jednym pliku\", \"Źle rozwiązałem ten konflikt\". Jak zmienić message, jak odwrócić commit, jak zmienić historię? Ta kata nauczy Cię jak wyjśc obronną ręką z sytuacji, w których coś poszło nie tak."
     },
     {
         id: "22",
         title: "git branch & git tag",
         description: "Czym jest branch? Czym jest tag? Jak sie ich używa? Te podstawowe pojęcia warto znać zanim zaczniemy bawić sie bardziej skomplikowanymi komendami. Ta kata dedykowana jest początkującym gitowcom, którzy dopiero zaczynają swoją przygodę z gitem."
     },
     {
    	 id: "23",
    	 title: "git bisect",
    	 description: "Motywacja<br/><br/> Uwaga: pełne uczestnictwo w tej kacie wymaga zainstalowanego mavena lub gradle<br/><br/> Czasami, nawet pomimo używania continous integration i testów automatycznych, pojawia się w projekcie tajemnicza regresja. Co gorsza, nikt z zespołu nie ma pomysłu, co ją mogło spowodować. Wtedy z pomocą przychodzi nam komenda git bisect.<br/><br/> Scenariusz<br/><br/> Na specjalnie przygotowanych gałęziach zobaczymy jak znaleźć commita, który 'popsuł' coś w projekcie. Najpierw regresji będziemy szukać za pomocą testów ręcznych. Potem na gałęzi zawierającej tysiąc commitów znajdziemy problematyczną zmianę wpisując w konsoli tylko jedną komendę."
     },
     {
    	 id: "24",
    	 title: "git filter-branch",
    	 description: "Motywacja<br/><br/> Chcesz upublicznić swój projekt z całą historią commitów? Niestety zawiera ona dane, których nie możesz udostępnić, takie jak adresy e-mail albo nieopatrznie zamieszczone hasła. Co wtedy? Wtedy możesz zmienić swoją historię za pomocą git filter-branch.<br/><br/> Scenariusz<br/><br/> Na przykładach zobaczymy w działaniu filtry dostępne w komendzie filter-branch. Za ich pomocą 'masowo' przepiszemy historie specjalnie przygotowanych gałęzi."
     },
     {
    	 id: "25",
    	 title: "branching model",
    	 description: "Motywacja<br/><br/> Czym są branche? Jak tworzone i reprezentowane są tagi i inne obiekty w GIT? Co czyni go takim wyjątkowym i jak się to ma do pozostałych systemów kontroli wersji.<br/><br/> Scenariusz<br/><br/> Zapoznamy się z obiektami reprezentującymi tagi, branche i commity w GIT. Nauczymy się jak się je tworzy, zarządza, merguje i jak najlepiej stworzyć drzewko w naszym repozytorium."
     },
     {
    	 id: "26",
    	 title: "pull requests",
    	 description: "Motywacja<br/><br/> Czym różni się merge od rebase? Dlaczego jeden z nich jest lepszy, jak to się ma do historii repozytorium i commitów?<br/><br/> Scenariusz<br/><br/> Dowiemy się jak wygląda repozytorium przed i po mergach, rebaseach. Reprezentację obiektów GITowych oraz wpływ na nasz kod i pojawianie się konfliktów."
     },
     {
    	 id: "27",
    	 title: "tig - tekstowy interfejs do gita",
    	 description: "Tematem tej katy będzie Tig - interaktywna tekstowa nakładka na gita która znacznie ułatwia pracę w konsoli.<br/><br/> Podczas tej katy spóbujemy korzystając z Tiga wykonać podstawowe czynności - przejrzeć historię rewizji, zmienić gałąź (branch), zatwierdzić zmiany wprowadzone na wielu plikach i kilka innych. Wszystko z poziomu tekstowego interfejsu, bez konieczność wpisywania i zapamiętywania długich komend.  <br/><br/> Na koniec pokażę jak można dopasować Tiga do własnych potrzeb, zmienić klawisze na bardziej intuicyjne oraz poprawić wprowadzone zmiany (amend).<br/><br/>Na katę należy zabrać ze sobą komputer z zainstalowanym Gitem i TIgiem oraz dowolne repozytorium Git.<br/><br/><a href'http://jonas.nitro.dk/tig/'>http://jonas.nitro.dk/tig/</a>"
     },
     {
    	 id: "28",
    	 title: "git rerere",
    	 description: "Czy kiedykolwiek miałeś do zrobienia merge lub rebase brancha z wieloma commitami, których implementacja trwała tak długo, że modliłeś się, żeby konfliktów było 'tylko' kilkanaście? Na tym warsztacie dowiesz się jak uniknąć takiej sytuacji. Nauczymy gita, jak ma rozwiązywać konflikty, a gdy przyjdzie czas na merga - wszystko zrobi się samo."
     },
     {
    	 id: "29",
    	 title: "git merge vs git rebase",
    	 description: "Na tym warsztacie dowiesz się jaka jest różnica między merge a rebase. Powiem o zaletach i wadach każdego z tych podejść, do czego się nadaje każde z nich, a kiedy nie można go używać. Będzie też mowa o dobrych praktykach przy mergowaniu i rebasowaniu."
     },
     {
    	 id: "30",
    	 title: "legit",
    	 description: "LEGIT is a tiny wrapper for git cmd interface. It gives you an alternative for standard commands, I would say more intuitive ones. I will show how it makes git workflow easier."
     },
     {
    	 id: "31",
    	 title: "github",
    	 description: "GITHUB - Everyone knows what this is. I will just summarize how to do pull requests, where are the issues discussed and how to keep you fork synchronized."
     },
     {
    	 id: "32",
    	 title: "git rebase -i",
    	 description: "Interaktywny rebase jest bardzo przydatnym narzędziem w sytuacji, gdy chcemy posprzątać historię swoich commitów. Tyczy się to przede wszystkim osób, które w 'programming mode' nie chcą sobie zawracać głowy tym, w jaki sposób będzie to utrwalone w repo. Po zakończeniu prac nad danym ficzerem przychodzi jednak refleksja, że nie powinno się tego bałaganu oddawać do review, czy też wypychać do repozytorium. Moim celem jest, aby każdy uczestnik warsztatów potrafił efektywnie korzystać z tej komendy i się jej nie bał :)"
     },
     {
    	 id: "33",
    	 title: "git everyday",
    	 description: "Kata ta jest skierowana do osób, które na co dzień pracują z Git-em. Przedstawię moje kilkuletnie doświadczenia w pracy z tym narzędziem. Opowiem o błędach, które popełniłem i zasugeruję jak możecie ich uniknąć. W oparciu o przykłady z codziennych bojów z Git-em przedstawię mój pomysł na efektywne zorganizowanie sobie współpracy z Git-em."
     },
     {
    	 id: "34",
    	 title: "github rebase -i",
    	 description: "<u>Motivation</u><br/><br/>Git rebase --interactive is a great tool that let you rewrite your git history removing unneded commits, changing their order, editing commit messages, combining multiple commits into one or splitting one big commit into smaller ones. If you know how to use it, you can change your git workflow considerably - you can commit often, without thinking what are you commiting. You will be able to fix all this before you push it to the upstream.<br/><br/><u>Scenario</u><br/><br/>We will start with some theoretical information on what rebasing in git is, how it works, when we should and when we shouldn't use it. We we'll take a look on feature branch that is about to be pushed to upstream for merging. We'll rewrite the history of our commits using interactive rebasing so that they are easier to read, more consistent and, well, prettier."
     },
	];

}
