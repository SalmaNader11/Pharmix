app.service("CartService" , function(){

    this.getCart = function(){
        return JSON.parse(localStorage.getItem("cart")) || [];
    };

    this.saveCart = function(cart){
        localStorage.setItem("cart",JSON.stringify(cart));
    };

    this.addToCart = function(product,quantity){
       let cart=this.getCart();

       let existingItem = cart.find(function(item){
        return item.id == product.id;

       });

       if(existingItem){
        existingItem.quantity += quantity;
       } else{
        cart.push({
            id:product.id,
            name:product.name,
            price:product.price,
            img: product.img,
            quantity: quantity
        });
       }

       this.saveCart(cart);

    };

    this.removeItem=function(index){
        let cart=this.getCart();
        cart.splice(index,1);
        this.saveCart(cart);
    };

    this.cartCount=function(){
        let cart=this.getCart();
        let total= 0;

        cart.forEach(function(item){
            total += item.quantity;
        });
        return total;
    }
});


