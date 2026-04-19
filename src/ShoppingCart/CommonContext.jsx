import React,{createContext , useState} from "react";

export const CommonContext = createContext()

export function CartProvider({ children}) {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (product) => {
        setCartItems((PrevItem) => {
            let existItem = PrevItem.find(item => item.id === product.id);

            if (existItem) {
                return PrevItem.map((item) => {
                    return item.id === product.id
                        ? { ...item, qty: item.qty + 1 }
                        : item;
                });
            } else {
                return [...PrevItem, { ...product, qty: 1 }];
            }
        });
    };


    const removeToCart = (productId) => {
        setCartItems((product) => {
             return product.map(item => {
              return  item.id === productId ? { ...item, qty: item.qty - 1 } : item
            }).filter(item => item.qty > 0)
        })
    }


     return (
        <>
            <CommonContext.Provider value={{ addToCart, cartItems, removeToCart }}>
                {children}
            </CommonContext.Provider>
        </>
    )

}