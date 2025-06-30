import {useStripe,useElements,CardElement} from '@stripe/react-stripe-js'
import { useState } from 'react'
import {useSelector} from 'react-redux'

import { selectCartTotal } from '../../store/cart/cart.selector'
import { selectCurrentUser } from '../../store/user/user.selector'
import Button,{BUTTON_TYPES} from '../button/button.component'

import {PaymentFormContainer,FormContainer} from './payment-form.styles'
const PaymentForm=()=>{
    const stripe=useStripe();
    const elements=useElements();

    const amount=useSelector(selectCartTotal);
    const currentUser=useSelector(selectCurrentUser)
    const [isProcessingPayment,setIsProcessingPayment]=useState(false)

    const paymentHandler=async(e)=>{
        e.preventDefault();

        if(!stripe || !elements){
            return
        }

        setIsProcessingPayment(true)
        const response=await fetch('/.netlify/functions/create-payment-intent',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({amount:amount*100})
        }).then(res=>res.json())

        const clientSecret=response.paymentIntent.client_secret
        console.log(clientSecret)

        const paymentResult=await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement),
                billing_details:{
                    name:currentUser?currentUser.displayName:'Guest',

                }
            }
        })

        setIsProcessingPayment(false)

        if(paymentResult.error){
            alert(paymentResult.error)
        }
        else{
            if(paymentResult.paymentIntent.status==="succeeded"){
                alert("Payment Successful")
            }
        }
    }

    return(
        <PaymentFormContainer>
            <FormContainer>
                <h2>Credit Cart Payment:</h2>
                 <CardElement options={{hidePostalCode:true}}/>
                 <Button disabled={isProcessingPayment} buttonType={BUTTON_TYPES.inverted} onClick={paymentHandler}>Pay Now</Button>
            </FormContainer>
        </PaymentFormContainer>
    )
}
 

export default PaymentForm