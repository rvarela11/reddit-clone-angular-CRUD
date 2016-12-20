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
      return $http.get('/api/comments/post/' + postId);
    },
    createComment: function(newComment) {
      return $http.post('/api/comments', newComment)
    },
    editComment: function(postEditData, commentId) {
      return $http.put('/api/comments/' + commentId, postEditData); 
    },
    deleteComment: function(commentId) {
      return $http.delete('/api/comments/' + commentId);
    }
  }

});
