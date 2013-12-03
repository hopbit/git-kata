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
    	 description : "In the beginning we'll say a few sentences about CI - if there'd be anyone who doesn't know what it is or what are the benefits. Kata will be divided into 2 parts: <a href='http://travis-ci.org/' target='_blank'>travis</a> and <a href='http://jenkins-ci.org/' target='_blank'>jenkins</a>. Both are free & popular CI platforms, designed for different types of projects. We'll take a very quick tour over functionalities of each tool and try to use them with our repos afterwards. I'd expect you to have a registered github account (this is required for travis integration) as well as jenkins deployed locally on your computers."
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
     }
	];

}
