import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Spacer,
  Button,
  Img,
  Box,
} from "@chakra-ui/react";

export default function CompetitionTab() {
  return (
    <>
      <Flex>
        <Tabs width="1024px" mt={"8"}>
          <TabList>
            <Tab fontSize={"lg"}>전체</Tab>
            <Tab fontSize={"lg"}>진행중</Tab>
            <Tab fontSize={"lg"}>접수중</Tab>
            <Tab fontSize={"lg"}>접수예정</Tab>
            <Tab fontSize={"lg"}>종료</Tab>
            <Spacer />
            <Button bgColor={"white"} size={"xl"}>
              <Img
                boxSize={"36px"}
                objectFit={"cover"}
                src="/sortTop.png"
              ></Img>
            </Button>
            <Button bgColor={"white"} size={"xl"}>
              <Img boxSize={"36px"} src="/sortBottom.png"></Img>
            </Button>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}
