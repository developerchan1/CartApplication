import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import Header from '../components/Header';
import Sort from '../components/Sort';
import Loader from '../components/Loader';
import ProductItem from '../components/ProductItem';
import Footer from '../components/Footer';
import Popup from '../components/Popup';

import {useCartContext} from '../context/CartContext';
import globalStyles from '../decorations/globalStyles';
import {colors} from '../decorations/colors';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const CartScreen = () => {
  const cartContext = useCartContext();
  const [checkoutModalVisible, setCheckoutModalVisible] = useState(false);

  useEffect(() => {
    cartContext.getProductList();
  }, []);

  const handleCheckout = () => {
    setCheckoutModalVisible(true);
    cartContext.setShowDropdownMenu(false);
  };

  const handleClosePopup = () => {
    cartContext.reset();
    setCheckoutModalVisible(false);
  };

  return (
    <GestureHandlerRootView style={globalStyles.flexFull}>
      <Header />
      {cartContext.showLoader ? (
        <Loader />
      ) : (
        <>
          <Sort />
          <FlatList
            style={[globalStyles.flexFull, {backgroundColor: colors.black15}]}
            data={cartContext.productList}
            renderItem={({item}) => <ProductItem data={item} />}
          />
        </>
      )}
      <Footer onCheckout={handleCheckout} />
      <Popup visible={checkoutModalVisible} onClosePopup={handleClosePopup} />
    </GestureHandlerRootView>
  );
};

export default CartScreen;
