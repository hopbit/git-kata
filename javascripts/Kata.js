function Kata($scope) {
	// ą ć ę ł ń ó ś ź ż

	$scope.katas = [ 
     {
		id : "1",
		title : "Git submodules",
		description : "<u>Motivation</u><br/><br/>Git submodules is essential in several use cases: Version relation between libraries on a commit granularity level, Exposition of isolated components to external providers without exposition of the hole codebase.<br/><br/><u>Scenario</u><br/><br/>Start from a single application and two libraries separated. Next, integrate the libraries as submodules of the application and start versioning on a commit level. We will make several changes to feel the git-submodule workflow. At the end, we will return to the independent modules configuration.<br/><br/>"
     }
	];

}
