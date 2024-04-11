import { menu } from "@/constants";
import { Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

const DefaultLayoutNav = () => {
  return (
    <Stack as={"ul"} direction={"row"}>
      {menu.map((item) => (
        <Link key={item.label} href={item.url}>
          <Text mx={10} fontSize={"lg"}>
            {item.label}
          </Text>
        </Link>
      ))}
    </Stack>
  );
};

export default DefaultLayoutNav;
