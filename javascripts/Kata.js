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
     }
	];

}
