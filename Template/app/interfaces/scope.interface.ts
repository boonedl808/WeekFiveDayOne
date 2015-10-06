module blog {

	export interface IBlogScope extends angular.IScope {
		listPosts: Function;
		switchView: Function;
		blogResults: any;
		blogPost: PostItem;
		createPost: Function;
		location: angular.ILocationService
	}

}
