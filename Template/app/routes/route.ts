module blog {
	export class BlogRoute {
		public static $inject = ['$routeProvider'];

		constructor(
			private $routeProvider: angular.route.IRouteProvider
		){
			$routeProvider.when('/', {
				templateUrl: 'views/list.html',
				controller: 'BlogListCtrl'
			}).when('/newpost', {
				templateUrl: 'views/create.html',
				controller: 'BlogCreateCtrl'
			}).otherwise({
				redirectTo: '/'
			})
		}
	}

}