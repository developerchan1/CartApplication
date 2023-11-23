import {Dimensions, StyleSheet} from 'react-native';
import {colors} from './colors';

const {width} = Dimensions.get('screen');

const globalStyles = StyleSheet.create({
  flexFull: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 20,
    backgroundColor: colors.header,
    borderBottomStartRadius: 16,
    borderBottomEndRadius: 16,
  },
  headerTitle: {
    marginBottom: 5,
    color: colors.white,
    fontSize: 20,
    fontWeight: '700',
  },
  headerSubtitle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '400',
  },
  sortContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 23,
    borderColor: colors.black5,
    borderBottomWidth: 1,
  },
  sortByText: {
    color: colors.black80,
    fontSize: 16,
    fontWeight: '400',
  },
  width40: {
    width: '40%',
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: colors.black10,
    borderWidth: 1,
    borderColor: colors.black5,
    borderRadius: 8,
  },
  dropdownMenuContainer: {
    width: '100%',
    position: 'absolute',
    zIndex: 100,
    top: 50,
    elevation: 2,
    borderRadius: 8,
  },
  dropdownOption: {
    backgroundColor: colors.white,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.black10,
  },
  dropdownText: {
    color: colors.black80,
    fontSize: 16,
    fontWeight: '400',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderTitle: {
    color: colors.black80,
    fontSize: 20,
    fontWeight: '700',
  },
  loaderSubtitle: {
    color: colors.black50,
    fontSize: 16,
    fontWeight: '400',
  },
  productItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  productItemName: {
    color: colors.black80,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  productItemPrice: {
    color: colors.black50,
    fontSize: 16,
    fontWeight: '700',
  },
  footerContainer: {
    padding: 24,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.black5,
    elevation: 2,
  },
  totalPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  totalPriceText: {
    color: colors.black100,
    fontSize: 18,
    fontWeight: '700',
  },
  popupBackdrop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  popupContainer: {
    padding: 24,
    borderRadius: 16,
    margin: 24,
    maxWidth: width * 0.8,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
  },
  popupTitle: {
    marginBottom: 14,
    color: colors.black100,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
  popupContent: {
    marginBottom: 24,
    color: colors.black100,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
  },
  button: {
    backgroundColor: colors.black80,
    borderRadius: 48,
    padding: 8,
  },
  buttonText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
  buttonGhost: {
    backgroundColor: colors.white,
    borderRadius: 48,
    padding: 8,
    borderWidth: 2,
    borderColor: colors.black100,
  },
  buttonTextGhost: {
    color: colors.black100,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default globalStyles;
