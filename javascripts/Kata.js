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
    	 description : "In the beginning we'll say a few sentences about CI - if there'd be anyone who doesn't know what it is or what are the benefits. Kata will be divided into 2 parts: <a href='http://travis-ci.org/' target='_blank'>travis</a> and <a href='http://jenkins-ci.org/' target='_blank'>jenkins</a>. Both are free & popular CI platforms, designed for different types of projects. We'll take a very quick tour over functionalities of each tool and try to use them with our repos afterwards. I'd expect you to have a registered github account (this is required for travis integration) as well as jenkins deployed locally on your computers.<br/><br/><a href='https://github.com/join'>registering github account</a><br/><a href='https://wiki.jenkins-ci.org/display/JENKINS/Installing+Jenkins'>installing jenkins</a>"
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
    	 description: "Często w trakcie pracy z systemem kontroli wersji dochodzisz do wniosku: 'To powinno być w branchu', 'Releasy powinny wychodzić z innego brancha', 'Gdzieś musimy przechowywać stabilne wersje'. Git to nie SVN! Praca z tym narzędziem jest o wiele prostsza, a łatwość tworzenia gałęzi powinna zachęcać do ich wykorzystywania. Właśnie tą cechę gita bardzo mocno wykorzystuje git flow - wzorzec pracy z gitem - stanowiący odpowiedź na nurtujące Cię pytania.<br/><br/> W trakcie warsztatu szczegółowo zapoznamy się z modelem git flow, jego wadami i zaletami, a także nauczymy się z niego korzystać."
     },
     {
    	 id: "14",
    	 title: "Eclipse + EGit",
    	 description: "Używasz w codziennej pracy Eclipse a źródła projektu przechowujesz w repozytorium git. Kiedy pojawił się EGit 1.0.0 próbowałeś go użyć, ale okazało się że nie dość że interfejs jest 'tajemniczy', to co chwile pojawiają się błędy albo, co gorsza, operacji nie można wykonać z niewiadomych powodów. Od tej pory każdy przełączasz się cierpliwie (lub nie-) między Eclipse a konsolą. Mam dobrą wiadomość: EGit 3.0 (dostarczany razem z Eclipse 4.3) działa całkiem przyzwoicie i może  zaoszczędzić sporo Twojego czasu.<br/><br/> Warsztat w formie kata wymaga podstawowej znajomości gita oraz komputera z zainstalowanym Eclipse w wersji 4.3 (Kepler). Przećwiczymy tworzenie nowych repozytoriów lokalnych, użycie widoków 'Staging', 'History' i 'Commit viewer', operacje na branchach: tworzenie, przełączanie, merge i rebase wraz z rozwiązywaniem konfliktów, oraz pracę z repozytoriami zdalnymi: podłączanie, push i fetch. Omówimy też operacje które (nadal) łatwiej jest wykonać z konsoli."
     },
     {
    	 id: "15",
    	 title: "git rebase --onto",
    	 description: "Git rebase is pretty powerfull tool, but sometimes you can get confused and feel that it works magically. If you feel that 'git rebase master' and 'git rebase --onto commit-b commit-a' are two totally different commands come and see they are not. You will learn what the hell will happen after 'git rebase --onto branch-a branch-b branch-c'."
     }
	];

}
