import React from 'react';
import {Modal, Text, View} from 'react-native';
import {useCartContext} from '../context/CartContext';
import globalStyles from '../decorations/globalStyles';
import Button from './Button';

const Popup = ({visible, onClosePopup}) => {
  const cartContext = useCartContext();
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClosePopup}>
      <View style={globalStyles.popupBackdrop}>
        <View style={globalStyles.popupContainer}>
          <Text style={globalStyles.popupTitle}>Success!</Text>
          <Text style={globalStyles.popupContent}>
            You have successfully purchase {cartContext.totalAddedCartItems}{' '}
            products with total of ${cartContext.totalPrice}. Click close to buy
            another modems
          </Text>
          <Button buttonText="Close" onPress={onClosePopup} />
        </View>
      </View>
    </Modal>
  );
};

export default Popup;
