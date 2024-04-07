import { Flex, Center } from "@chakra-ui/react";
import DefaultLayoutFooter from "./default-layout.footer";
import DefaultLayoutHeader from "./default-layout.header";

interface DefaultLayoutProps {
  children?: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Flex direction={"column"}>
      <DefaultLayoutHeader />
      <Center as={"main"} p={"8"}>
        {children}
      </Center>
      <DefaultLayoutFooter />
    </Flex>
  );
};

export default DefaultLayout;
