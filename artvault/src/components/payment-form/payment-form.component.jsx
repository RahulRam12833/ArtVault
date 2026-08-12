import {
  useStripe,
  useElements,
  CardElement,
} from '@stripe/react-stripe-js';

import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

import { BUTTON_TYPES } from '../button/button.component';

import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
} from './payment-form.styles';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    try {
      const response = await fetch(
        '/.netlify/functions/create-payment-intent',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: amount * 100,
          }),
        }
      );

      const data = await response.json();

      const clientSecret =
        data.paymentIntent.client_secret;

      const paymentResult =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: currentUser
                ? currentUser.displayName
                : 'Guest',
            },
          },
        });

      if (paymentResult.error) {
        alert(paymentResult.error.message);
        return;
      }

      if (
        paymentResult.paymentIntent.status ===
        'succeeded'
      ) {
        alert('Payment Successful');
      }
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Something went wrong with the payment.');
    } finally {
      setIsProcessingPayment(false);
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h3>Payment</h3>

        <CardElement
          options={{
            hidePostalCode: true,
          }}
        />

        <PaymentButton
          type="submit"
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPES.inverted}
          disabled={!stripe || isProcessingPayment}
        >
          Complete purchase →
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;