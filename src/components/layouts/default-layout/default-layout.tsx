import { Flex } from "@chakra-ui/react";
import { Noto_Sans_KR } from "next/font/google";
import DefaultLayoutFooter from "./default-layout.footer";
import DefaultLayoutHeader from "./default-layout.header";

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
      <Flex as={"main"} py={"8"}>
        <Flex w={"container.xl"} flex={"1"}>
          {children}
        </Flex>
      </Flex>
      <DefaultLayoutFooter />
    </Flex>
  );
};

export default DefaultLayout;
