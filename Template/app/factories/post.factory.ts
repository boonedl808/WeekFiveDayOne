module blog {
	export class BlogService {
        public static $inject = ['$resource'];
		constructor($resource: angular.resource.IResourceService) {
			var url = 'https://api.parse.com/1/classes/Posts';
			var reqHeaders = {
				"X-Parse-Application-Id": 'JoI14Sd9qkOQ0PkcvgiKZ170eqVpB2sWCe4JIX2Y',
				"X-Parse-REST-API-Key": 'Ojcju0EWGiOm8w74T295Y603qby63X6BQsvGCj2E'
			}

			var resource = $resource(url, {}, {
				'query': {
					headers: reqHeaders
				},
				'save' : {
					method: 'POST',
					headers: reqHeaders
				},
				'get': {
					headers: reqHeaders
				}
			});

			return <IPostResource>resource;
		}
	}

}
