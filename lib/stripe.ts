import { createCheckoutSession, getStripePayments, } from '@stripe/firestore-stripe-payments'
import { getFunctions, httpsCallable } from '@firebase/functions'
import app from '../firebase'

function Stripe() {
	return (
		<div>Stripe</div>
	)
}

export default Stripe