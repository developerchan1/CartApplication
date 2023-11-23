import {Image, Pressable, Text, View} from 'react-native';
import {useCartContext} from '../context/CartContext';

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
    <View style={{flexDirection: 'row', width: '50%'}}>
      <Pressable disabled={quantity === 0} onPress={handleReduceQuantity}>
        <Text>-</Text>
      </Pressable>
      <Text style={{flex: 1, textAlign: 'center'}}>{quantity}</Text>
      <Pressable disabled={quantity === maxStock} onPress={handleAddQuantity}>
        <Text>+</Text>
      </Pressable>
    </View>
  );
};

export default QuantityControl;
