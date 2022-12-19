import React from "react";
import { Flex, Stack, Text, Box } from "@chakra-ui/react";

type propTypes = {
  categoryName: string;
  movies: Array<{
    title: string;
    poster: string;
  }>;
};

const CatCards = ({ categoryName, movies }: propTypes) => {
  return (
    <Flex
      direction="column"
      p="0px"
      marginTop="48px"
      marginLeft="67px"
      sx={{
        "@media screen and (max-width: 834px)": {
          marginLeft: "77px",
        },
        "@media screen and (max-width: 380px)": {
          marginTop: "33px",
          marginLeft: "28px",
        },
      }}
    >
      <Text
        h="31px"
        w="fit-content"
        fontSize="24px"
        lineHeight="31px"
        fontWeight="400"
        marginBottom="18px"
        sx={{
          "@media screen and (max-width: 380px)": {
            marginBottom: "26px",
            fontSize: "18px",
            lineHeight: "23px",
            height: "23px",
          },
        }}
      >
        {categoryName}
      </Text>
      <Stack
        direction="row"
        spacing="13px"
        minH="300px"
        overflowX="auto"
        sx={{
          "::-webkit-scrollbar": {
            width: "0px",
          },
          "scrollbar-width": "none",
          "@media screen and (max-width: 380px)": {
            minH: "200px",
          },
        }}
      >
        {movies.map((movie, index) => (
          <Flex
            alignItems="center"
            justifyContent="center"
            w="300px"
            h="300px"
            minW="300px"
            p="10px"
            borderRadius="12px"
            bgColor="rgba(0,0,0,0.9)"
            bgBlendMode="overlay"
            bgImg={movie.poster}
            sx={{
              "@media screen and (max-width: 380px)": {
                w: "200px",
                h: "200px",
                minW: "200px",
              },
            }}
            key={index}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              w="100%"
              h="100%"
              color="white"
              fontSize="24px"
              fontWeight="400"
              lineHeight="31px"
              sx={{
                "@media screen and (max-width: 380px)": {
                  fontSize: "18px",
                  lineHeight: "23px",
                },
              }}
            >
              <Text maxW="100%">{movie.title}</Text>
            </Box>
          </Flex>
        ))}
      </Stack>
    </Flex>
  );
};

export default CatCards;
