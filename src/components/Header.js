import React from 'react';
import {Image, Text, View} from 'react-native';
import {useCartContext} from '../context/CartContext';
import globalStyles from '../decorations/globalStyles';

const Header = () => {
  const cartContext = useCartContext();
  const totalProducts = cartContext.productList.length;
  return (
    <View style={globalStyles.headerContainer}>
      {/* <Image /> */}
      <View>
        <Text style={globalStyles.headerTitle}>Product List</Text>
        {totalProducts > 0 && (
          <Text style={globalStyles.headerSubtitle}>
            {totalProducts} Products in Cart
          </Text>
        )}
      </View>
    </View>
  );
};

export default Header;
