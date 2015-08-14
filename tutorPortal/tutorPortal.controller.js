(function () {
    'use strict';

    angular
        .module('app')
        .controller('tutorPortalController', tutorPortalController);

    tutorPortalController.$inject = ['UserService', '$rootScope'];
    function tutorPortalController(UserService, $rootScope) {
        var vm = this;
        vm.user = null;
        initController();

        function initController() {
            loadCurrentUser();
        }

        function loadCurrentUser() {
            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    vm.user = user;
                    if (!vm.user.accountType.match(/Tutor/)) {
                        $location.path("/login");
                    }else{
                        loadAllUsers();
                    }
                });
        }
    }

})();