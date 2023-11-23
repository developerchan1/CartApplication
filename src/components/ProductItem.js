import React from 'react';
import {Text, View} from 'react-native';
import QuantityControl from './QuantityControl';
import globalStyles from '../decorations/globalStyles';

const ProductItem = ({data}) => {
  const {id, title, price, stock, quantity} = data;
  return (
    <View style={globalStyles.productItemContainer}>
      <View style={globalStyles.flexFull}>
        <Text style={globalStyles.productItemName}>{title}</Text>
        <Text style={globalStyles.productItemPrice}>${price}</Text>
      </View>
      <QuantityControl id={id} maxStock={stock} quantity={quantity} />
    </View>
  );
};

export default ProductItem;
