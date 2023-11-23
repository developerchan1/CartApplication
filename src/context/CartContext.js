import React from 'react';
import {getProducts} from '../../services/ApiServices';

const {createContext, useContext, useState} = require('react');

const CartContext = createContext({});

export const CartProvider = ({children}) => {
  const [showLoader, setShowLoader] = useState(false);
  const [productList, setProductList] = useState([]);
  const [addedCartItems, setAddedCartItems] = useState({});
  const [totalAddedCartItems, setTotalAddedCartItems] = useState(0);
  const [selectedOption, setSelectedOption] = useState('Default');
  const [totalPrice, setTotalPrice] = useState(0);
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  const getProductList = async () => {
    setShowLoader(true);
    const result = await getProducts();
    setProductList(
      result.data.products?.map(({id, title, price, stock}) => ({
        id,
        title,
        price,
        stock,
        quantity: 0,
      })),
    );
    setShowLoader(false);
  };

  const selectOptionDropdown = option => {
    setSelectedOption(option);
    setProductList(prev => {
      let result = JSON.parse(JSON.stringify(prev));
      if (option === 'Highest Price') {
        result.sort((a, b) => b.price - a.price);
      } else if (option === 'Lowest Price') {
        result.sort((a, b) => a.price - b.price);
      } else if (option === 'Name') {
        result.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        });
      }
      return result;
    });
  };

  const countTotalAddedCartItems = newAddedCartItems => {
    let newTotalAddedCartItems = 0;
    for (let key in newAddedCartItems) {
      if (newAddedCartItems[key] > 0) {
        newTotalAddedCartItems++;
      }
    }
    setTotalAddedCartItems(newTotalAddedCartItems);
  };

  const addReduceQuantity = (id, action) => {
    const newAddedCartItems = {...addedCartItems};
    const totalProductQuantity = addedCartItems?.[id] ?? 0;

    if (action === 'add') {
      newAddedCartItems[id] = totalProductQuantity + 1;
    } else if (action === 'reduce') {
      newAddedCartItems[id] = totalProductQuantity - 1;
      if (newAddedCartItems[id] <= 0) {
        delete newAddedCartItems[id];
      }
    }

    setAddedCartItems(newAddedCartItems);
    countTotalAddedCartItems(newAddedCartItems);
    updateProductListQuantity(newAddedCartItems);
  };

  const updateProductListQuantity = newAddedCartItems => {
    let newTotalPrice = 0;
    let newProductList = JSON.parse(JSON.stringify(productList)).map(
      product => {
        if (newAddedCartItems[product.id]) {
          newTotalPrice =
            newTotalPrice + product.price * newAddedCartItems[product.id];
        }
        return {
          id: product.id,
          title: product.title,
          price: product.price,
          stock: product.stock,
          quantity: newAddedCartItems?.[product.id] ?? 0,
        };
      },
    );
    setProductList(newProductList);
    setTotalPrice(newTotalPrice);
  };

  const reset = () => {
    setAddedCartItems({});
    countTotalAddedCartItems({});
    updateProductListQuantity({});
  };

  return (
    <CartContext.Provider
      value={{
        productList,
        addedCartItems,
        totalPrice,
        showLoader,
        totalAddedCartItems,
        selectedOption,
        showDropdownMenu,
        setShowDropdownMenu,
        selectOptionDropdown,
        setProductList,
        addReduceQuantity,
        setAddedCartItems,
        setTotalPrice,
        getProductList,
        reset,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
