import { useDispatch } from 'react-redux';

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from '../../store/cart/cart.reducer';

import {
  CheckoutItemContainer,
  ImageContainer,
  ItemDetails,
  ItemName,
  ItemType,
  Quantity,
  QuantityButton,
  QuantityValue,
  Price,
  RemoveButton,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const dispatch = useDispatch();

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img
          src={imageUrl}
          alt={name}
        />
      </ImageContainer>

      <ItemDetails>
        <ItemName>{name}</ItemName>
        <ItemType>Original artwork</ItemType>

        <Quantity>
          <QuantityButton
            onClick={() => dispatch(removeItemFromCart(cartItem))}
            aria-label="Decrease quantity"
          >
            −
          </QuantityButton>

          <QuantityValue>{quantity}</QuantityValue>

          <QuantityButton
            onClick={() => dispatch(addItemToCart(cartItem))}
            aria-label="Increase quantity"
          >
            +
          </QuantityButton>
        </Quantity>
      </ItemDetails>

      <Price>
        AUD${price * quantity}
      </Price>

      <RemoveButton
        onClick={() => dispatch(clearItemFromCart(cartItem))}
        aria-label={`Remove ${name}`}
      >
        ×
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;