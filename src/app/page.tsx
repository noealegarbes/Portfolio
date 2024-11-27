// app/page.tsx
import React from "react";
import WaveGeometry from "@/components/WaveScene";
import { Box, Flex, Text, VStack, Grid, GridItem, Link, Button, Container } from "@chakra-ui/react";
const HomePage: React.FC = () => {
    return (
        <div>
            <WaveGeometry />
            <Flex
                className="
                    justify-around 
                    items-center 
                    absolute 
                    inset-0 
                    w-full 
                    h-full 
                    pointer-events-none
                "
            >
                <Box
                    className="
                        w-[95vw] 
                        h-[95vh] 
                        bg-none 
                        backdrop-blur-[18px] 
                        flex 
                        flex-col 
                        border 
                        border-solid 
                        border-white 
                        rounded-[10px] 
                        shadow-[0_0_10px_rgba(0,0,0,0.5)] 
                        pointer-events-auto
                    "
                >
                    <Text
                        className="
                            px-[25px] 
                            pb-0 
                            font-[Audiowide] 
                            text-white 
                            text-[80px]
                            fade-in"
                        style={{ animationDelay: "0.2s" }}
                    >
                        DIONICO NOE ALEGARBES
                    </Text>
                    <Text
                        className="
                            px-[25px] 
                            pt-0 
                            text-white 
                            text-[20px] 
                            font-bold
                            fade-in
                        "
                        fontFamily={"'Bungee Hairline', sans-serif"}
                        style={{ animationDelay: "0.4s" }}
                    >
                        Digital Craftsman [ Artist / Developer / Designer ]
                    </Text>
                    {/* test commit */}
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
                                className="
                                    p-[25px] 
                                    relative 
                                    bottom-0
                                "
                                align={"left"}
                            >
                                <Link
                                    href="https://github.com/noealegarbes"
                                    color="white"
                                    className="fade-in"
                                    fontFamily={"'Bungee Hairline', sans-serif"}
                                    fontWeight="bold"
                                    style={{ animationDelay: "0.5s" }}
                                >
                                    github
                                </Link>
                                <Link
                                    href="https://www.instagram.com/_dnart/"
                                    color="white"
                                    className="fade-in"
                                    fontFamily={"'Bungee Hairline', sans-serif"}
                                    fontWeight="bold"
                                    style={{ animationDelay: "0.8s" }}
                                >
                                    Instagram
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/noe-alegarbes/"
                                    color="white"
                                    className="fade-in"
                                    fontFamily={"'Bungee Hairline', sans-serif"}
                                    fontWeight="bold"
                                    style={{ animationDelay: "1s" }}
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
                            <Box className="bg-red-400 opacity-10 w-full h-full"></Box>
                        </GridItem>
                    </Grid>
                </Box>
            </Flex>
        </div>
    );
};

export default HomePage;
