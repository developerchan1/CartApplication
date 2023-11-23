import React from 'react';
import {Text, View} from 'react-native';
import {useCartContext} from '../context/CartContext';
import globalStyles from '../decorations/globalStyles';
import Button from './Button';

const QuantityControl = ({id, quantity, maxStock}) => {
  const cartContext = useCartContext();

  const handleAddQuantity = () => {
    cartContext.addReduceQuantity(id, 'add');
    cartContext.setShowDropdownMenu(false);
  };

  const handleReduceQuantity = () => {
    cartContext.addReduceQuantity(id, 'reduce');
    cartContext.setShowDropdownMenu(false);
  };

  return (
    <View style={globalStyles.qtyContainer}>
      <Button
        customButtonStyle={
          quantity === 0
            ? globalStyles.qtyButtonDisable
            : globalStyles.qtyButton
        }
        customButtonTextStyle={globalStyles.qtyButtonText}
        disabled={quantity === 0}
        onPress={handleReduceQuantity}
        buttonText="-"
      />
      <Text style={globalStyles.qtyText}>{quantity}</Text>
      <Button
        customButtonStyle={
          quantity === maxStock
            ? globalStyles.qtyButtonDisable
            : globalStyles.qtyButton
        }
        customButtonTextStyle={globalStyles.qtyButtonText}
        disabled={quantity === maxStock}
        onPress={handleAddQuantity}
        buttonText="+"
      />
    </View>
  );
};

export default QuantityControl;
