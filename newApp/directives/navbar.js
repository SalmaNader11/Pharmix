app.directive("navbar", function (CartService) {
  return {
    restrict: "E",
    template: `<nav class="navbar navbar-expand-lg bg-white border-bottom py-3">
        <div class="container">
            <a class="navbar-brand d-flex align-items-center gap-2 m-0" href="#/shop">
                <img src="pics/pharamix logo.jpeg" alt="Pharamix logo" class="logo-img">
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="mainNavbar">
            <form class="d-flex flex-grow-1 mx-lg-4 my-3 my-lg-0 position-relative" role="search">
            
            <input type="search" class="form-control rounded-pill ps-4 pe-5" placeholder="Search" ng-model="search">
            <button type="button" class="btn position-absolute top-50 end-0 translate-middle-y me-2 rounded-pill text-white d-flex align-items-center justify-content-center"
            style="width:48px; height:42px; background-color:#2ead63; border:none;">
            <i class="bi bi-search"></i>
            </button>
            </form>

            <ul class="navbar-nav align-items-lg-center me-lg-3">
                <li class="nav-item">
                    <a class="nav-link px-lg-3 fw-semibold" href="#/home">Home</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link px-lg-3" href="#/shop">Shop</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link px-lg-3" href="#/aboutus">About US</a>
                </li>
            </ul>
            <div class="d-flex align-items-center gap-3 mt-3 mt-lg-0">
                <a href="#" class="btn px-4 rounded-pill text-white fw-semibold" style="background-color:#2ead63;">Login</a>
                <a href="" ng-click="goToCart()" class="btn p-0 border-0 bg-transparent text-dark position-relative">
                    <i class="bi bi-bag fs-4"></i>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill" style="background:#2ead63; font-size:10px;">
                      {{cartCount}}
                    </span>
                </a>
            </div>
            </div>
        </div>
        </nav>
       `
       ,controller: function($scope, $location){

    $scope.goToCart = function(){
        $location.path('/cart');
    };

    $scope.cartCount = CartService.cartCount();

    $scope.$watch(function(){
        return CartService.cartCount();
    }, function(newValue){
        $scope.cartCount = newValue;
    });

}
    }
});
