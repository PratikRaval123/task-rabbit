import React from "react";
import styles from "../../style";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Service() {
  const data = [
    {
      id: 1,
      name: "Featured Tasks",
      img: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/v1540594732/uvhli36lpkyxpgrkwblj.jpg",
      subItems: [
        { name: "Delivery" },
        { name: "Home Repairs" },
        { name: "General Cleaning" },
        { name: "Assemble Furniture" },
        { name: "Help Moving / Hauling" },
        { name: "Heavy Lifting" },
        { name: "Personal Assistant" },
        { name: "Yard Work" },
        { name: "Queue in Line" },
        { name: "Organize Closet" },
        { name: "Office Administration" },
        { name: "Organization" },
      ],
    },
    {
      id: 2,
      name: "Handyman",
      img: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/v1704995273/iakiz9oyfy0rt5tcw74k.jpg",
      subItems: [
        { name: "Home Repairs" },
        { name: "Assemble Furniture" },
        { name: "TV Mounting" },
        { name: "Heavy Lifting" },
        { name: "Painting" },
        { name: "Plumbing" },
        { name: "Yard Work" },
        { name: "Hang Pictures" },
        { name: "Shelf Mounting" },
        { name: "Light Installation" },
        { name: "Electrical Work" },
        { name: "Carpentry" },
        { name: "Baby Proofing" },
        { name: "Smart Home Installation" },
      ],
    },
    {
      id: 3,
      name: "Moving Services",
      img: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/v1704995300/qsneajnue7udlov0smkb.jpg",
      subItems: [
        { name: "Help Moving" },
        { name: "Truck Assisted Help Moving" },
        { name: "Packing Services & Help" },
        { name: "Unpacking Services" },
        { name: "Heavy Lifting" },
        { name: "Local Movers" },
        { name: "Junk Pickup" },
        { name: "Furniture Movers" },
        { name: "One Item Movers" },
        { name: "Storage Unit Moving" },
        { name: "Couch Removal" },
        { name: "Mattress Pick-Up & Removal" },
        { name: "Furniture Removal" },
        { name: "Pool Table Movers" },
        { name: "Appliance Removal" },
        { name: "Heavy Furniture Moving" },
        { name: "Rearrange Furniture" },
        { name: "Full Service Help Moving" },
        { name: "In-Home Furniture Movers" },
      ],
    },
    {
      id: 4,
      name: "Furniture Assembly",
      img: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/v1704995325/qlnbm9iobu3jukhqw5q1.jpg",
      subItems: [
        { name: "Furniture Assembly" },
        { name: "Patio Furniture Assembly" },
        { name: "Desk Assembly" },
        { name: "Dresser Assembly" },
        { name: "Bed Assembly" },
        { name: "Bookshelf Assembly" },
        { name: "Couch Assembly" },
        { name: "Chair Assembly" },
        { name: "Wardrobe Assembly" },
        { name: "Table Assembly" },
        { name: "Disassemble Furniture" },
      ],
    },
    {
      id: 5,
      name: "Mounting & Installation",
      img: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/v1704995430/cm4icsesada13e5qwvwe.jpg",
      subItems: [
        { name: "TV Mounting" },
        { name: "Install Shelves, Rods & Hooks" },
        { name: "Ceiling Fan Installation" },
        { name: "Install Blinds & Window Treatments" },
        { name: "Hang Art, Mirror & Decor" },
        { name: "General Mounting" },
        { name: "Hang Christmas Lights" },
      ],
    },
    {
      id: 6,
      name: "Cleaning",
      img: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/v1704995362/v4derwxej8iigyyri4ua.jpg",
      subItems: [
        { name: "House Cleaning Services" },
        { name: "Deep Cleaning" },
        { name: "Disinfecting Services" },
        { name: "Move In Cleaning" },
        { name: "Move Out Cleaning" },
        { name: "Vacation Rental Cleaning" },
        { name: "Carpet Cleaning Service" },
        { name: "Garage Cleaning" },
        { name: "One Time Cleaning Services" },
        { name: "Car Washing" },
        { name: "Laundry Help" },
        { name: "Pressure Washing" },
        { name: "Spring Cleaning" },
      ],
    },
    {
      id: 7,
      name: "Shopping + Delivery",
      img: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/v1593210806/jymnwqzhwmi9gt5ppz8d.jpg",
      subItems: [
        { name: "Delivery Service" },
        { name: "Grocery Shopping & Delivery" },
        { name: "Running Your Errands" },
        { name: "Christmas Tree Delivery" },
        { name: "Wait in Line" },
        { name: "Deliver Big Piece of Furniture" },
        { name: "Drop Off Donations" },
        { name: "Contactless Delivery" },
        { name: "Pet Food Delivery" },
        { name: "Baby Food Delivery" },
        { name: "Return Items" },
        { name: "Wait for Delivery" },
        { name: "Shipping" },
        { name: "Breakfast Delivery" },
        { name: "Coffee Delivery" },
      ],
    },
    {
      id: 8,
      name: "IKEA Services",
      img: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/v1583182090/zpfridasq1xhzgjbkhgz.jpg",
      subItems: [
        { name: "Light Installation" },
        { name: "Furniture Removal" },
        { name: "Smart Home Installation" },
        { name: "Organization" },
        { name: "Furniture Assembly" },
        { name: "General Mounting" },
      ],
    },
    {
      id: 9,
      name: "Yardwork Services",
      img: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/v1593211035/vg0ayodhdpmqj07ypkoa.jpg",
      subItems: [
        { name: "Gardening Services" },
        { name: "Weed Removal" },
        { name: "Lawn Care Services" },
        { name: "Lawn Mowing Services" },
        { name: "Landscaping Services" },
        { name: "Gutter Cleaning" },
        { name: "Tree Trimming Service" },
        { name: "Vacation Plant Watering" },
        { name: "Patio Cleaning" },
        { name: "Hot Tub Cleaning" },
        { name: "Fence Installation & Repair Services" },
        { name: "Deck Restoration Services" },
        { name: "Patio Furniture Assembly" },
        { name: "Fence Staining" },
        { name: "Mulching Services" },
        { name: "Lawn Fertilizer Service" },
        { name: "Hedge Trimming Service" },
        { name: "Outdoor Party Setup" },
        { name: "Urban Gardening Service" },
        { name: "Leaf Raking & Removal" },
        { name: "Produce Gardening" },
        { name: "Hose Installation" },
        { name: "Shed Maintenance" },
        { name: "Pressure Washing" },
      ],
    },
  ];

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="flex flex-col ">
        {/* Hero Section */}
        <div className=" flex flex-col md:flex-row items-center justify-between  relative">
          <div className="text-center md:text-left absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              What do you need help with?
            </h1>
          </div>
          <div className="w-full">
            <img
              src="https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/v1601487284/futujaglhmhwn0x7jfow.png"
              alt="Hero Section"
              className="h-[30vh] md:h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className={`${styles.boxWidth}`}>
        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-8 container mx-auto px-3">
          {/* Featured Tasks */}
          {data?.map((ele) => {
            return (
              <div className="p-5 shadow-md rounded-md bg-gradient">
                <img
                  src={ele?.img}
                  alt="Featured Tasks"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-bold mb-2 text-white">
                  {ele?.name}
                </h2>
                <div className="border-b border-gray-200 my-4"></div>

                {ele?.subItems?.map((item) => {
                  return (
                    <ul className="text-white space-y-2">
                      <li>{item?.name}</li>
                    </ul>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
