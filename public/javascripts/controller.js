app.controller('MainController', ['$scope', 'firstService', function($scope,
  firstService) {
  $scope.views = {};
  $scope.views.userForm = {
    title: "",
    author: "",
    description: "",
    votes: 0
  };

  $scope.rightNow = Date.now();

  $scope.getPosts = function() {
    firstService.all().then(function(info) {
      $scope.views.info = info.data;
    });
  }

  $scope.getPosts();

  $scope.submitForm = function(event) {
    event.preventDefault();
    $scope.postForm.$setUntouched();
    firstService.create($scope.views.userForm).then(function(msg) {
      $scope.views.userForm = {
        title: "",
        author: "",
        description: "",
        votes: 0
      };
      $scope.getPosts();
    });
  };

  $scope.editPost = function(event, id) {
    event.preventDefault();
    firstService.edit($scope.views.userForm, id).then(function(msg) {
      $scope.views.userForm = {
        title: "",
        author: "",
        description: "",
        votes: 0
      };
      $scope.getPosts();
    });
  }

  $scope.deleteUser = function(id) {
    firstService.delete(id).then(function(msg) {
      $scope.getPosts();
    });
  }

  $scope.views.userCommentForm = {
    author: "",
    comment: "",
    post_id: 0
  };

  $scope.getComments = function(id) {
    console.log(id);
    firstService.getComments(id).then(function(info) {
      console.log(info.data);
      $scope.views.comments = info.data;
    });
  }

  $scope.submitFormComment = function(event, id) {
    event.preventDefault();
    $scope.views.userCommentForm.post_id = id;
    firstService.createComment($scope.views.userCommentForm).then(
      function(msg) {
        $scope.views.userCommentForm = {
          author: "",
          comment: ""
        };
      });
  };

}]);
