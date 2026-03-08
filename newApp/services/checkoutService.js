app.service("checkoutService", function($http) {
   const API_URL="https://icvsptspjawmlvijrvzj.supabase.co/rest/v1/user";
    const config={
        headers:{
        apikey:"sb_publishable_dYO32RhGgjACHZETtVujuw_ZJ5yOO1C",
        Authorization:"Bearer sb_publishable_dYO32RhGgjACHZETtVujuw_ZJ5yOO1C",
        "Content-Type":"application/json",
        Prefer: "return=representation"
         }
        }; 
        this.findUser=function(email){
           return $http.get(API_URL + "?email=eq." + email + "&select=*", config);
        };
        this.createUser = function(customer){
            return $http.post(API_URL,{
                name: customer.name,
                email: customer.email,
                phoneNumber: customer.phoneNumber,
             }, config);
            };
            this.createOrder=function(orderData){
                return $http.post("https://icvsptspjawmlvijrvzj.supabase.co/rest/v1/order", orderData, config);
            };
            this.createOrderItems=function(itemsData){
                return $http.post("https://icvsptspjawmlvijrvzj.supabase.co/rest/v1/order_items", itemsData, config);
            }
    });