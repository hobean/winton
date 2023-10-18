import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const Tabbs = (props) => {
  return (
    <div>
      <Tabs>
        <TabList>
          {props.city.map((city, index) => {
            return <Tab key={index}>{city.name}</Tab>;
          })}
        </TabList>
        <TabPanels>
          {props.city.map((city, index) => {
            return <TabPanel key={index}>{city.image}</TabPanel>;
          })}
        </TabPanels>
      </Tabs>
      <button>aaa</button>
    </div>
  );
};

export default Tabbs;
