import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';

import Header from '../components/Header';
import Sort from '../components/Sort';
import Loader from '../components/Loader';
import ProductItem from '../components/ProductItem';
import Footer from '../components/Footer';
import Popup from '../components/Popup';

import {useCartContext} from '../context/CartContext';
import globalStyles from '../decorations/globalStyles';
import {colors} from '../decorations/colors';

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
    <View style={globalStyles.flexFull}>
      <Header />
      <Sort />
      {cartContext.showLoader ? (
        <Loader />
      ) : (
        <FlatList
          style={[globalStyles.flexFull, {backgroundColor: colors.black15}]}
          data={cartContext.productList}
          renderItem={({item}) => <ProductItem data={item} />}
        />
      )}
      <Footer onCheckout={handleCheckout} />
      <Popup visible={checkoutModalVisible} onClosePopup={handleClosePopup} />
    </View>
  );
};

export default CartScreen;
