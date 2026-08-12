import { useSelector } from 'react-redux';

import {
  CheckoutContainer,
  CheckoutIntro,
  CheckoutTitle,
  CheckoutSubtitle,
  CheckoutLayout,
  CollectionSection,
  CollectionHeader,
  CollectionCount,
} from './checkout.styles';

import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import OrderSummary from '../../components/order-summary/order-summary.component';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  if (cartItems.length === 0) {
    return (
      <CheckoutContainer>
        <CheckoutIntro>
          <CheckoutTitle>Your collection awaits</CheckoutTitle>
          <CheckoutSubtitle>
            Your cart is currently empty.
          </CheckoutSubtitle>
        </CheckoutIntro>
      </CheckoutContainer>
    );
  }

  return (
    <CheckoutContainer>
      <CheckoutIntro>
        <CheckoutTitle>Your collection</CheckoutTitle>
        <CheckoutSubtitle>
          Review the works you've selected before proceeding to payment.
        </CheckoutSubtitle>
      </CheckoutIntro>

      <CheckoutLayout>
        <CollectionSection>
          <CollectionHeader>
            <span>Selected works</span>
            <CollectionCount>
              {cartItems.length} {cartItems.length === 1 ? 'work' : 'works'}
            </CollectionCount>
          </CollectionHeader>

          {cartItems.map((cartItem) => (
            <CheckoutItem
              key={cartItem.id}
              cartItem={cartItem}
            />
          ))}
        </CollectionSection>

        <OrderSummary cartTotal={cartTotal} />
      </CheckoutLayout>
    </CheckoutContainer>
  );
};

export default Checkout;