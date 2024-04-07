import { Button, Center, Heading, Flex, Spacer } from "@chakra-ui/react";
import DefaultLayoutNav from "./default.layout.nav";
import Link from "next/link";

const DefaultLayoutHeader = () => {
  return (
    <Flex flexDirection={"column"} bgColor={"gray.200"} p={"5"}>
      <Flex flexDirection={"row"}>
        <Link href="/">
          <Heading>Winton</Heading>
        </Link>
        <Spacer />
        <Center>
          <DefaultLayoutNav />
        </Center>
        <Spacer />
        <Link href="/auth/signin">
          <Button colorScheme="blackAlpha">로그인</Button>
        </Link>
        <Link href="/auth/signup">
          <Button colorScheme="blackAlpha">회원가입</Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default DefaultLayoutHeader;
