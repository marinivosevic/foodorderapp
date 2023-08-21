import { NextResponse } from "next/server";
import  {stripe} from "../../../../utils/getStripe"

export async function POST(request:Request){
  const cartItems = await request.json();
  const origin = request.headers.get('origin');
  const session = await stripe.checkout.sessions.create({
    submit_type:"pay",
    mode:"payment",
    payment_method_types:['card'],
    line_items:cartItems,
    success_url:`${origin}/success?sesson_id={CHECKUOUT_SESSION_ID}`,
    cancel_url:`${origin}/cart`,
  })
  return NextResponse.json(session)
}