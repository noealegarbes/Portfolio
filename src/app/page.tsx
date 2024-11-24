// app/page.tsx
import React from "react";
import ThreeScene from "../components/ThreeScene";
import WaveGeometry from "@/components/WaveScene";
import { Box, Flex, Text, VStack, Grid, GridItem, Link, Button, Container } from "@chakra-ui/react";
const HomePage: React.FC = () => {
    return (
        <div>
            {/* <ThreeScene /> */}
            <WaveGeometry />
            <Flex
                justifyContent="space-around"
                alignItems="center"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                }}
            >
                <Box
                    w={"95vw"}
                    h={"95vh"}
                    bg="none"
                    backdropFilter={"auto"}
                    backdropBlur={"18px"}
                    display="flex"
                    flexDirection="column"
                    rounded={"10px"}
                    boxShadow="0 0 10px rgba(0, 0, 0, 0.50)"
                    pointerEvents={"auto"}
                >
                    <Text
                        padding={"10px"}
                        paddingBottom={0}
                        fontFamily="'Audiowide', sans-serif"
                        color={"white"}
                        fontSize={"80px"}
                    >
                        DIONICO NOE ALEGARBES
                    </Text>
                    <Text
                        padding={"13px"}
                        paddingTop={"0"}
                        color={"white"}
                        fontSize={"20px"}
                        fontFamily={"'Bungee Hairline', sans-serif"}
                        fontWeight={"bold"}
                    >
                        Digital Craftsman [ Artist / Developer / Designer ]
                    </Text>
                    <Grid
                        flex="1"
                        templateColumns="repeat(3, 1fr)"
                        w="100%"
                    >
                        {/* socials */}
                        <GridItem
                            colSpan={2}
                            rowSpan={1}
                            display={"flex"}
                            alignItems={"end"}
                            bottom="0"
                        >
                            <VStack
                                align="left"
                                padding="13px"
                                position="relative"
                                bottom="0"
                            >
                                <Link
                                    href="https://github.com/noealegarbes"
                                    color="white"
                                    fontFamily={"'Bungee Hairline', sans-serif"}
                                    fontWeight={"bold"}
                                >
                                    github
                                </Link>
                                <Link
                                    href="https://www.instagram.com/_dnart/"
                                    color="white"
                                    fontFamily={"'Bungee Hairline', sans-serif"}
                                    fontWeight={"bold"}
                                >
                                    Instagram
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/noe-alegarbes/"
                                    color="white"
                                    fontFamily={"'Bungee Hairline', sans-serif"}
                                    fontWeight={"bold"}
                                >
                                    linkedIn
                                </Link>
                            </VStack>
                        </GridItem>

                        <GridItem
                            colSpan={1}
                            rowSpan={1}
                            display={"flex"}
                        >
                            {/* <Box
                                backgroundColor={"red"}
                                width={"100%"}
                                height={"100%"}
                            ></Box> */}
                        </GridItem>
                    </Grid>
                </Box>
            </Flex>
        </div>
    );
};

export default HomePage;
