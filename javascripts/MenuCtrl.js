function MenuCtrl($scope) {

	$scope.menus = [ {
		href : 'index.html',
		label : 'Start'
		/*
		,submenus : [ {
			href : '#mission',
			label : 'Mission'
		}, {
			href : '#location',
			label : 'Time & Place',
		}, {
			href : '#agenda',
			label : 'Agenda',
		}, {
			href : '#sponsors',
			label : 'Sponsors',
		}
		, {
			href : '#mentors',
			label : 'Mentors',
		}, {
			href : '#organizers',
			label : 'Organizers',
		} ]*/
	},
	{
		href : 'news.html',
		label : 'News'
	},
	{
		href : 'registration.html',
		label : 'Registration'
	}, {
		href : 'agenda.html',
		label : 'Agenda'
	}, {
		href : 'faq.html',
		label : 'FAQ'
	}, {
		href : 'mentors.html',
		label : 'Mentors'
	}, {
		href : 'sponsors.html',
		label : 'Sponsors'
	},
	{
		href : 'map.html',
		label : 'Map'
	},
	{
		href : 'reference.html',
		label : 'Reference'
	}, {
		href : 'contact.html',
		label : 'Contact'
	} ];
}
