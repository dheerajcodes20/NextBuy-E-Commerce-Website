"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";

export default function CheckoutNow({
  price_id,
}: {
  price_id: string;
}) {
  const { checkoutSingleItem } = useShoppingCart();

  function buyNow(priceId: string) {
    checkoutSingleItem(priceId);
  }

  return (
    <Button
      className="text-black bg-gray-200 hover:bg-white hover:border hover:border-black "
      onClick={() => {
        buyNow(price_id);
      }}
    >
      Checkout Now
    </Button>
  );
}