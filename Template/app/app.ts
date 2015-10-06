module blog {
	var app = angular.module('Blog', ['ngResource', 'ngRoute']);

	app.controller('BlogListCtrl', BlogListCtrl);
	app.controller('BlogCreateCtrl', BlogCreateCtrl);
	app.factory('BlogService', BlogService);
	app.config(BlogRoute);

}
