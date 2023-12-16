import React, { useState } from "react";
import Cover from "./Cover";
import coverImg from "../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../hook/useMenu";
import FoodCard from "./FoodCard";

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu([])
    const desserts = menu.filter(item=> item.category === "dessert");
    const soup = menu.filter(item=> item.category === "soup");
    const salad = menu.filter(item=> item.category === "salad");
    const pizza = menu.filter(item=> item.category === "pizza");
    const drinks = menu.filter(item=> item.category === "offered");
  return (
    <div>
      <Cover img={coverImg} title={"Order"} />

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
          
        </TabList>

        <TabPanel>
          <div className="grid md:grid-cols-3 gap-4">
              {
                salad.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
              }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 gap-4">
              {
                pizza.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
              }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 gap-4">
              {
                soup.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
              }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 gap-4">
              {
                desserts.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
              }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 gap-4">
              {
                drinks.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
              }
          </div>
        </TabPanel>
        
      </Tabs>
    </div>
  );
};

export default Order;
