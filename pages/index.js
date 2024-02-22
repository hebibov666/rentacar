import Navbar from "./components/Navbar";
import SliderSection from "./components/Slider";
import { client } from "@/sanity/lib/client";
import { useState } from "react";
import AllCars from "./components/AllCars";
export default function Home() {
  return (
    <main>
  <div className="flex flex-col">
  <Navbar/>
    <SliderSection/>
   <AllCars/>
  </div>
    </main>
  );
}
/*export async function getServerSideProps(context) {
  const {query}=context
  const keys=Object.keys(query)
  const key=keys[0]
  try {
    const cars = await client.fetch(
      `*[_type=="post" && type=='${key}']{
        _id,
        gearbox,
        model,
        marka,
        price,
        seat,
        year,
        fueltype,
        "images": images[]{
          asset -> {
              _id,
              url
          }
      }
      }`
    );


    return {
      props: {
        cars,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        cars: [],
      },
    };
  }
}*/