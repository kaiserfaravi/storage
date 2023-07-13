const getInputValueById =id=>{
const inputField= document.getElementById(id);
const inputValue = inputField.value;
inputField.value ='';
return inputValue;
};

const addProduct =()=>{
        const product = getInputValueById( 'product-name');
        const quantity = getInputValueById( 'product-quantity');
        console.log(product,quantity);
        //display product
        addProductToDisplay(product,quantity);
        //set to localstorage
        //simple way
        // localStorage.setItem(product,quantity);
        saveItemOnLocalStorage(product,quantity);

}

const getShoppingCartFromLocalStorage = ()=>{
            let savedCart = localStorage.getItem('cart');
            let cart ={};
            if(savedCart){
                cart = JSON.parse(savedCart);

            }
            return cart;
}
const saveItemOnLocalStorage =(product,quantity)=>{
        const cart = getShoppingCartFromLocalStorage();
        //add product as the property
        cart[product]=quantity;
        const cartStringified = JSON.stringify(cart);
        //save to localStorage
        localStorage.setItem('cart',cartStringified);


    }

const addProductToDisplay =(product,quantity)=>{
        const productContainer =document.getElementById('product-container');
        const li = document.createElement('li');
        li.innerText =`${product}:${quantity}`;
        productContainer.appendChild(li);
}
const displayStoredProducts =()=>{

    const cart = getShoppingCartFromLocalStorage();
    for(const product in cart )
    {
        const quantity = cart[product];
        addProductToDisplay(product,quantity);
    }
}
displayStoredProducts();