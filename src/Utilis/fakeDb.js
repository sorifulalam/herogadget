// add data to local storage
const addtoDb = id =>{
    let shoppingCart = {};
    // if  get previous data from local storage
    const storeCart = localStorage.getItem('shoping-Cart');
    if(storeCart){
        shoppingCart=JSON.parse(storeCart);
    }

    // add quentity data to local storage
    const quentuty = shoppingCart[id];
    if(quentuty){
        const newQuentuty = quentuty + 1 
        shoppingCart[id] = newQuentuty
    }else{
        shoppingCart[id] = 1
    }

    localStorage.setItem('shoping-Cart', JSON.stringify(shoppingCart));


}

// get to data from local stroge 

    const getStorecart = () =>{
        let shoppingCart = {};
    // if  get previous data from local storage
    const storeCart = localStorage.getItem('shoping-Cart');
    if(storeCart){
        shoppingCart=JSON.parse(storeCart);
    }
    return shoppingCart;
    }



export {addtoDb , getStorecart}