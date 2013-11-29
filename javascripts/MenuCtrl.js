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
	}, {
		href : 'faq.html',
		label : 'FAQ'
	}, {
		href : 'registration.html',
		label : 'Registration'
	}, {
		href : 'mentors.html',
		label : 'Mentors'
	}, {
		href : 'sponsors.html',
		label : 'Sponsors'
	}, {
		href : 'agenda.html',
		label : 'Agenda'
	} /* TODO , { href : 'flyer.html', label : 'poster' } */
	, {
		href : 'reference.html',
		label : 'Reference'
	}, {
		href : 'contact.html',
		label : 'Contact'
	} ];
}
