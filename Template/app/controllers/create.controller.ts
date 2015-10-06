module blog {

	export class BlogCreateCtrl {

		public static $inject = ['$scope', '$location', 'BlogService'];

		constructor(
			public $scope: IBlogScope,
			public $location: angular.ILocationService,
			public blogService: IPostResource
		){
			$scope.switchView = (view: string) => {
				this.$location.path(view);
			};

			$scope.createPost = (view: string) => {
				var that = this;
				this.$scope.blogPost.timePretty = moment().format("dddd, MMMM Do YYYY");
				blogService.save(this.$scope.blogPost).$promise.then(function(data){
					that.$scope.switchView(view);
				});
			}
		}

	}
}
