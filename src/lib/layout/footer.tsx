import { Flex, Link, Text } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Flex
      as='footer'
      width='full'
      align='center'
      alignSelf='flex-end'
      justifyContent='center'
    >
      <Text fontSize='xs'>
        {new Date().getFullYear()} -{' '}
        <Link
          href='https://www.portfolio-quiz.com/@tanishraj'
          isExternal
        >
          Saif Sheikh
        </Link>
      </Text>
    </Flex>
  );
};
