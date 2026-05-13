"use client"
import { Box, Link, Heading, Stack } from "@chakra-ui/react";
import { FaCodeBranch } from "react-icons/fa6";

export default function Footer() {
    const currentDate: Date = new Date()
    const year: number = currentDate.getFullYear()

    return (
        <>
            <Box margin={"auto"}>
                <Stack direction={"row"} >
                    <Heading size={"md"} textAlign={"center"}>
                        &copy; {year} Anthony Micco
                    </Heading>
                    <Link color={"#0F172A"} _hover={{ color: "#2563EB" }} href="https://github.com/Ajmicco18/ml-model-simulation">
                        <FaCodeBranch />
                    </Link>
                </Stack>
            </Box>
        </>
    )
}