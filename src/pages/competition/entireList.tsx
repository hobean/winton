import { ContentContainer, DefaultLayout } from "@/components";
import { Divider, Flex, Tab, TabList, Tabs, Text } from "@chakra-ui/react";
import Head from "next/head";
import Title from "../../components/layouts/default-layout/title";
import Calendar from "./calendar";
import CompetitionTab from "./tab";

export default function CompetitionList() {
  return (
    <>
      <Head>
        <title>Winton - Competition List</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <ContentContainer>
          <Flex direction={"column"} alignItems={"center"} gap={"3"}>
            <Title title={"전체 대회일정"} />
            <Tabs>
              <TabList>
                <Tab fontSize={"xl"} mr={"4"}>
                  주간일정
                </Tab>
                <Tab fontSize={"xl"}>월간일정</Tab>
                <Tab fontSize={"xl"} ml={"4"}>
                  연간일정
                </Tab>
              </TabList>
            </Tabs>
            <Calendar />
            <CompetitionTab />
            <Text fontSize={"md"}>Total 00건</Text>
            <Divider />
          </Flex>
        </ContentContainer>
      </DefaultLayout>
    </>
  );
}
