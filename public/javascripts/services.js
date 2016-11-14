app.factory("firstService", function($http) {

  return {
    all: function() {
      return $http.get('/api/posts');
    },
    create: function(newPost) {
      return $http.post('/api/posts', newPost);
    },
    edit: function(postEdit, postId) {
      return $http.put('/api/posts/' + postId, postEdit);
    },
    delete: function(postId) {
      return $http.delete('/api/posts/' + postId);
    },
    getComments: function(postId) {
      return $http.get('/api/comments/postfound/' + postId);
    },
    createComment: function(newComment) {
      return $http.post('/api/comments', newComment)
    }
  }

});
