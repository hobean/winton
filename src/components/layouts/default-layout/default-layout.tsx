import { Flex, Center } from "@chakra-ui/react";
import DefaultLayoutFooter from "./default-layout.footer";
import DefaultLayoutHeader from "./default-layout.header";
import { Noto_Sans_KR } from "next/font/google";
interface DefaultLayoutProps {
  children?: React.ReactNode;
}

const notoSansKr = Noto_Sans_KR({
  weight: ["500"],
  subsets: ["latin"],
});

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Flex direction={"column"} className={notoSansKr.className}>
      <DefaultLayoutHeader />
      <Center as={"main"} p={"16"}>
        {children}
      </Center>
      <DefaultLayoutFooter />
    </Flex>
  );
};

export default DefaultLayout;
