import { NextApiRequest, NextApiResponse } from "next";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import { stripe } from "../../lib/stripe";

const Handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {priceId} = req.body;

  if (!priceId) {
    return res.status(400).json({error: 'PriceId not found'});
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed!' })
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;
  
  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: "payment",
    line_items: priceId
  })  

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}

export default Handler;