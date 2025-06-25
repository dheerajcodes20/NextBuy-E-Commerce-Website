"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: { asset: { _ref: string; _type: string } }; // Replace 'any' with a specific type
  price_id: string;
}

export default function AddToBag({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    id: price_id, // Stripe expects this!
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };
  return (
    <Button className=" hover:bg-white hover:border hover:border-black"
      onClick={() => {
        if (!price_id) return;
        addItem(product);
        handleCartClick();
      }}
    >
      Add To Cart
    </Button>
  );
}