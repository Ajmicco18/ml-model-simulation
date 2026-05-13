import { Box, Heading, Text, Link } from "@chakra-ui/react"
import Footer from "../components/footer"
import Header from "../components/Header"

export default function Landing() {
    return (
        <>
            <Box display={"flex"} flexDirection={"column"} margin={"auto"} width={"100%"}>
                <Header />
                <Heading textAlign={"center"}>Landing Page</Heading>
                <Text textAlign={"center"}>This is the landing page!</Text>
                <Link href={"/"} className="main-button">
                    <Box >
                        <Text>Home</Text>
                    </Box>
                </Link>
                <Footer />
            </Box>
        </>
    )
}