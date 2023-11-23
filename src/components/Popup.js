import {Modal, Pressable, Text, View, Dimensions} from 'react-native';
import {useCartContext} from '../context/CartContext';

const {width} = Dimensions.get('screen');

const Popup = ({visible, onClosePopup}) => {
  const cartContext = useCartContext();
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClosePopup}
      style={{zIndex: 100}}>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <View
          style={{
            borderRadius: 16,
            margin: 24,
            maxWidth: width * 0.8,
            backgroundColor: 'white',
            elevation: 5,
            shadowColor: '#000000',
            shadowOpacity: 0.25,
            shadowRadius: 4,
            shadowOffset: {width: 0, height: 2},
          }}>
          <Text>Success!</Text>
          <Text>
            You have successfully purchase {cartContext.totalAddedCartItems}{' '}
            products with total of {cartContext.totalPrice}$. Click close to buy
            another modems
          </Text>
          <Pressable onPress={onClosePopup}>
            <Text>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default Popup;
