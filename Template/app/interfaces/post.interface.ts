module blog {
	export interface IPost extends angular.resource.IResource<IPost> {
		posts: any;
	}

	export interface IPostResource extends angular.resource.IResourceClass<IPost>{ }

}
