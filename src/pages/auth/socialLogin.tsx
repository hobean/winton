import {
  Button,
  Box,
  Heading,
  Flex,
  Input,
  Image,
  Text,
} from "@chakra-ui/react";

export default function SocialLogin() {
  return (
    <>
      <Flex mt="2" justifyContent="space-around">
        <div>
          <Image
            borderRadius="full"
            boxSize="40px"
            src="/kakao.png"
            alt="카카오 로그인"
          ></Image>
          <Text fontSize="xs" textAlign="center">
            카카오
          </Text>
        </div>
        <div>
          <Image
            borderRadius="full"
            boxSize="40px"
            src="/naver.png"
            alt="네이버 로그인"
          ></Image>
          <Text fontSize="xs" textAlign="center">
            네이버
          </Text>
        </div>
        <div>
          <Image
            borderRadius="full"
            boxSize="40px"
            src="/github.png"
            alt="깃허브 로그인"
          ></Image>
          <Text fontSize="xs" textAlign="center">
            깃허브
          </Text>
        </div>
        <div>
          <Image
            borderRadius="full"
            boxSize="40px"
            src="/google.png"
            alt="구글 로그인"
          ></Image>
          <Text fontSize="xs" textAlign="center">
            구글
          </Text>
        </div>
      </Flex>
    </>
  );
}
