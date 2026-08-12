
import {
  SummaryContainer,
  SummaryTitle,
  SummaryRow,
  TotalRow,
  PaymentButton,
} from './order-summary.styles';
import PaymentForm from '../payment-form/payment-form.component';

const OrderSummary = ({ cartTotal }) => {
 
  return (
    <SummaryContainer>
      <SummaryTitle>Order summary</SummaryTitle>

      <SummaryRow>
        <span>Subtotal</span>
        <span>AUD${cartTotal}</span>
      </SummaryRow>

      <SummaryRow>
        <span>Shipping</span>
        <span>Calculated at checkout</span>
      </SummaryRow>

      <TotalRow>
        <span>Total</span>
        <span>AUD${cartTotal}</span>
      </TotalRow>

     <PaymentForm/>
    </SummaryContainer>
  );
};

export default OrderSummary;