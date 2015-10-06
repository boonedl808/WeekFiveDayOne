module blog {
	declare function switchView(view: string);
	export class BlogListCtrl {

		public static $inject = ['$scope', '$location', 'BlogService'];


		constructor(
			public $scope: IBlogScope,
			public $location: angular.ILocationService,
			public blogService: IPostResource
		){
			this.blogService.query().$promise.then((data: any) => {
				this.$scope.blogResults = data.results;
			});

			$scope.switchView = (view: string) => {
				this.$location.path(view);
			}
		}

	}

}