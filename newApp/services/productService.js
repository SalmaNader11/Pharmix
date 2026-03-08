app.service("ProductService",function($http){
    const API_URL="https://icvsptspjawmlvijrvzj.supabase.co/rest/v1/medicine?select=*";
    const config={
        headers:{
        apikey:"sb_publishable_dYO32RhGgjACHZETtVujuw_ZJ5yOO1C",
        Authorization:"Bearer sb_publishable_dYO32RhGgjACHZETtVujuw_ZJ5yOO1C",
        "Content-Type":"application/json",
        Prefer: "return=representation"
         }
        };
        this.getProducts = function(){
            return $http.get(API_URL,config)
        };
        this.getProductById=function(id){
            return $http.get("https://icvsptspjawmlvijrvzj.supabase.co/rest/v1/medicine?id=eq." + id +"&select=*",config );
 
        };
    });