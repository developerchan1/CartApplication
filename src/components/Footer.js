import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {useCartContext} from '../context/CartContext';
import globalStyles from '../decorations/globalStyles';

const Footer = ({onCheckout}) => {
  const cartContext = useCartContext();
  const handleReset = () => {
    cartContext.reset();
    cartContext.setShowDropdownMenu(false);
  };
  return (
    <View style={globalStyles.footerContainer}>
      <View style={globalStyles.totalPriceContainer}>
        <Text style={globalStyles.totalPriceText}>Total</Text>
        <Text style={globalStyles.totalPriceText}>
          {cartContext.totalPrice}$
        </Text>
      </View>
      <Pressable
        disabled={
          cartContext.totalPrice === 0 && cartContext.totalAddedCartItems === 0
        }
        onPress={onCheckout}>
        <Text>Checkout</Text>
      </Pressable>
      {cartContext.totalPrice > 0 || cartContext.totalAddedCartItems > 0 ? (
        <Pressable onPress={handleReset}>
          <Text>Reset</Text>
        </Pressable>
      ) : (
        <></>
      )}
    </View>
  );
};

export default Footer;
