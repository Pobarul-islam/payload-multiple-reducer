// // state - count: 0
// // action - increment, decrement, reset
// // reducer
// // store

// const {createStore} = require("redux")

// // Constant
// const INCREMENT = "INCREMENT"
// const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE"
// const DECREMENT = "DECREMENT"
// const RESET = "RESET"

// // state
// const initialState = {
//     count: 0
// }

// // action

//  const incrementCounterAction = ()=>{
//     return{

//         type: INCREMENT,
//     }
//  }
//  const decrementCounterAction = ()=>{
//     return{

//         type: DECREMENT,
//     }
//  }
//  const resetCounterAction = ()=>{
//     return{

//         type: RESET,
//     }
// }
 
//  const incrementCounterByValue = (value)=>{
//     return{

//         type: INCREMENT_BY_VALUE,
//         payload: value
//     }
//  }



// //  creating reducer

// const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case INCREMENT:
            
//             return {
//                 ...state,
//                 count: state.count + 1,
//             }
//         case DECREMENT:
            
//             return {
//                 ...state,
//                 count: state.count - 1,
//             }
//         case RESET:
            
//             return {
//                 ...state,
//                 count: 0,
//             }
//         case INCREMENT_BY_VALUE:
            
//             return {
//                 ...state,
//                 count: state.count + action.payload
//             }
    
//         default:
//             state;
//     }

// };

// // store

// const store = createStore(counterReducer);

// store.subscribe(() => {
//     console.log(store.getState())
// });

// // store.dispatch(incrementCounterAction());
// // store.dispatch(incrementCounterAction());
// // store.dispatch(decrementCounterAction());
// // store.dispatch(resetCounterAction());
// store.dispatch(incrementCounterByValue(5));
// store.dispatch(incrementCounterByValue(10));




    // MULTIPLE REDUCER 

    
// product constanse 
    
// cart constanse 

    const CART_ITEMS = "CART_ITEMS"
    const ADD_CART_ITEMS = "ADD_CART_ITEMS"
    

    const GET_PRODUCTS = "GET_PRODUCT"
    const ADD_PRODUCTS = "ADD_PRODUCT"

    const { createStore } = require("redux")
                                    
// Product state

const initialProductState = {
    products: ["sugar", "salt"],
    numberOfProducts: 2
    
    // Cart state 
}
const initialCartState = {
    products: ["sugar", "salt"],
    numberOfProducts : 2
}


const getProducts = () => {
    return {
        type: GET_PRODUCTS,
    }
}
const addProducts = (product) => {
    return {
        type: ADD_PRODUCTS,
        payload: product,
    }
}


// productReducer

const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            
            return {
                ...state,
                
                
        }
        case ADD_PRODUCTS:
            
            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1,

                
        }
    
        default:
            state;
    }
}
// createReducer


// store

const store = createStore(productReducer);
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(getProducts())
store.dispatch(addProducts("pen"))