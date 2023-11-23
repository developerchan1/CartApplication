import React from 'react';
import {Text, View} from 'react-native';
import {useCartContext} from '../context/CartContext';
import globalStyles from '../decorations/globalStyles';
import Button from './Button';

const Footer = ({onCheckout}) => {
  const cartContext = useCartContext();
  const handleReset = () => {
    cartContext.reset();
    cartContext.setShowDropdownMenu(false);
  };
  return (
    <View style={globalStyles.footerContainer}>
      <View style={globalStyles.totalPriceContainer}>
        <Text style={globalStyles.totalPriceText}>Total:</Text>
        <Text style={globalStyles.totalPriceText}>
          {cartContext.totalPrice}$
        </Text>
      </View>
      <Button
        buttonText="Checkout"
        customButtonStyle={
          cartContext.totalPrice === 0 && cartContext.totalAddedCartItems === 0
            ? globalStyles.buttonDisabled
            : globalStyles.button
        }
        disabled={
          cartContext.totalPrice === 0 && cartContext.totalAddedCartItems === 0
        }
        onPress={onCheckout}
      />

      {cartContext.totalPrice > 0 || cartContext.totalAddedCartItems > 0 ? (
        <>
          <View style={{height: 12}} />
          <Button
            buttonText="Reset"
            customButtonStyle={globalStyles.buttonGhost}
            customButtonTextStyle={globalStyles.buttonTextGhost}
            onPress={handleReset}
          />
        </>
      ) : (
        <></>
      )}
    </View>
  );
};

export default Footer;
