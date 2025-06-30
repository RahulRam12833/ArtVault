import {CardElement} from '@stripe/react-stripe-js'

import Button,{BUTTON_TYPES} from '../button/button.component'

import {PaymentFormContainer,FormContainer} from './payment-form.styles'
const PaymentForm=()=>{

    const paymentHandler=async(e)=>{
        e.preventDefault();

        if(!stripe || !elements){
            return
        }

        

    }

    return(
        <PaymentFormContainer>
            <FormContainer>
                <h2>Credit Cart Payment:</h2>
                 <CardElement/>
                 <Button buttonType={BUTTON_TYPES.inverted}>Pay Now</Button>
            </FormContainer>
        </PaymentFormContainer>
    )
}
 

export default PaymentForm