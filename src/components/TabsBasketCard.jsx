import React, { useState } from "react";
import TabNavItem from "./tabs/TabNavItem";
import TabContent from "./tabs/TabContent";
 
const TabsBasketCard = () => {
  const [activeTab, setActiveTab] = useState("tab1");
 
  return (
    <div className="mt-5">
      <ul className="flex justify-evenly items-center relative text-main-black border-b border-b-[#CBCBCB] pb-2">
        <TabNavItem title="محصولات" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="تنظیمات" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <div className={`absolute z-[2] bottom-0 right-0 w-[100px] h-[3px] bg-main-blue transition-all duration-150  ${activeTab=="tab1"?"-translate-x-[90px]":"-translate-x-[250px]"}`}/>
      </ul>
 
      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <p>Tab 1 works!</p>
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <p>Tab 2 works!</p>
        </TabContent>
      </div>
    </div>
  );
};
 
export default TabsBasketCard;