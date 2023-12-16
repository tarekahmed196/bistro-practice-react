import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cover from "./Cover";
import coverImg from '../assets/shop/banner2.jpg';
import TabCategory from "./TabCategory";

const TabsItem = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const menu = useLoaderData([]);
  const salads = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
        <Cover img={coverImg}></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
            <div className="grid grid-cols-3 gap-4">
                {
                    salads.map(item=> <TabCategory item={item}></TabCategory>)
                }
            </div>
        </TabPanel>
        <TabPanel>
            <div className="grid grid-cols-3 gap-4">
                {
                    pizza.slice(0,6).map(item=> <TabCategory item={item}></TabCategory>)
                }
            </div>
        </TabPanel>
        <TabPanel>
            <div className="grid grid-cols-3 gap-4">
                {
                    drinks.map(item=> <TabCategory item={item}></TabCategory>)
                }
            </div>
        </TabPanel>

      </Tabs>
    </div>
  );
};

export default TabsItem;
