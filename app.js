(function () {
  "use strict";

  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

  function LunchCheckController($scope) {
    $scope.lunchMenu = "";
    $scope.message = "";

    $scope.checkIfTooMuch = function () {
      const elements = $scope.lunchMenu.split(",").filter(Boolean);
      if (elements.length === 0) {
        $scope.message = "Please enter data first";
      } else if (elements.length <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    };
  }
})();
