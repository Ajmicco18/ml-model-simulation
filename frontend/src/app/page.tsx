import { Box, Text, Link, Heading } from "@chakra-ui/react";

export default function Home() {

  return (
    <>
      <Box display={"flex"} flexDirection={"column"} gap={4} width={"100%"} margin={"auto"} justifyContent={"center"} alignItems={"center"}>
        <Heading size={"3xl"} textAlign={"center"}>
          Welcome to ML Model Simulation!
        </Heading>
        <Link href={"/Landing"} className="main-button">
          <Box>
            <Text>Get Started!</Text>
          </Box>
        </Link>
      </Box>
    </>
  );
}
