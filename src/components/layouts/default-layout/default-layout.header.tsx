import { ColorModeToggler } from "@/components";
import { Button, Center, Flex, Heading, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import DefaultLayoutNav from "./default.layout.nav";
import { useAlpha } from "@/hooks";

const DefaultLayoutHeader = () => {
  const { alpha } = useAlpha();

  return (
    <Flex direction="column" bgColor={alpha(50)} p="5" align={"center"}>
      <Flex direction="row" w={"container.lg"}>
        <Link href="/">
          <Heading>Winton</Heading>
        </Link>
        <Spacer />
        <Center>
          <DefaultLayoutNav />
        </Center>
        <Spacer />
        <Flex gap={"4"}>
          <Link href="/auth/signin">
            <Button size="sm" mr="2">
              로그인
            </Button>
          </Link>
          <Link href="/auth/signup">
            <Button text-algign="center" size="sm">
              회원가입
            </Button>
          </Link>
          <ColorModeToggler />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DefaultLayoutHeader;
