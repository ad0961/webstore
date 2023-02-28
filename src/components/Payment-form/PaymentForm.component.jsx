import { useState } from "react";
import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../Redux Store/user/User.selector";
import { selectNewCartTotal } from "../../Redux Store/cart/cart.selector";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import Button, {buttonCategory} from "../Button/Button.component";

import {PaymentFormContainer, FormContainer, PaymentButton} from './PaymentForm.style'

const PaymentForm = () => {
  const amount= useSelector(selectNewCartTotal);
  const user = useSelector(selectCurrentUser);
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    const paymentHandler = async(e) => {
        e.preventDefault();

        if(!stripe || !elements){
            return;
        }

        setIsProcessingPayment(true);

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: amount*8256 }),
          }).then(res => res.json());


      
          const clientSecret = response.paymentIntent.client_secret;

          console.log(amount);
        
      
          const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
            name: user? user.displayName : 'Guest',
              },
            },
          });

          setIsProcessingPayment(false);

          if (paymentResult.error) {
            alert("error", paymentResult.error.message, {type:'error'});
            console.log(paymentResult.error);
          } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
              alert('Payment Successful!', {type:'success'});
            }
          }
        };
    return(
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment :</h2>
                <CardElement />
                <PaymentButton isProcessing={isProcessingPayment} buttonType={buttonCategory.inverted}>
                  Pay Now</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>

    )
}

export default PaymentForm;