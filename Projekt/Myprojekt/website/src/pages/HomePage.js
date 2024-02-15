import React from "react";
import Discounts from "../components/Discounts/Discounts";
import Categories from "../components/Categories/Categories";
import RegistrDiscount from "../components/RegistrDiscount/RegistrDiscount";
import Sale from "../components/Sale/Sale";

export default function HomePage() {
  return (
    <section>
      <Discounts/>
      <Categories/>
      <RegistrDiscount/>
      <Sale/>
    </section>
  );
}
