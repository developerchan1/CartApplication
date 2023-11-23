import React from 'react';
import {Image, Text, View} from 'react-native';

import Dropdown from './Dropdown';
import globalStyles from '../decorations/globalStyles';
import {useCartContext} from '../context/CartContext';

const Sort = () => {
  const cartContext = useCartContext();

  return (
    <View style={globalStyles.sortContainer}>
      <View style={globalStyles.sortByContainer}>
        <Image
          source={require('../assets/images/sort.png')}
          style={globalStyles.sortByIcon}
        />
        <Text style={globalStyles.sortByText}>Sort By:</Text>
      </View>
      <Dropdown
        showDropdownMenu={cartContext.showDropdownMenu}
        setShowDropdownMenu={cartContext.setShowDropdownMenu}
        listOptions={['Highest Price', 'Lowest Price', 'Name']}
        onSelectOption={cartContext.selectOptionDropdown}
        selectedOption={cartContext.selectedOption}
      />
    </View>
  );
};

export default Sort;
