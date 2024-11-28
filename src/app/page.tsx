// app/page.tsx
import React from "react";
import WaveGeometry from "@/components/WaveScene";
import { Box, Flex, Text, VStack, Grid, GridItem, Link, Button } from "@chakra-ui/react";
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
                        border-gray-500
                        rounded-[10px] 
                        shadow-[0_0_10px_rgba(0,0,0,0.5)] 
                        pointer-events-auto
                    "
                >
                    <Text
                        className="
                            p-[25px]
                            pb-4
                            pt-4
                            text-white
                            text-3xl
                            sm:text-5xl
                            lg:text-7xl
                            font-[Jura]
                            fade-in
                            font-semibold"
                        style={{ animationDelay: "0.2s" }}
                    >
                        NOE ALEGARBES
                    </Text>
                    <Text
                        className="
                            px-[25px] 
                            pt-0 
                            text-white
                            text-base         
                            sm:text-lg      
                            lg:text-xl
                            text-[20px] 
                            fade-in
                            font-semibold
                        "
                        fontFamily={"'Bungee Hairline', sans-serif"}
                        style={{ animationDelay: "0.4s" }}
                    >
                        Software Engineer / Developer
                    </Text>
                    <Grid
                        flex="1"
                        templateColumns="repeat(3, 1fr)"
                        w="100%"
                    >
                        {/* socials */}
                        <GridItem
                            colSpan={[1, 2]}
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
                                    className="fade-in font-semibold"
                                    fontFamily={"'Bungee Hairline', sans-serif"}
                                    style={{ animationDelay: "0.5s" }}
                                >
                                    github
                                </Link>
                                <Link
                                    href="https://www.instagram.com/_dnart/"
                                    color="white"
                                    className="fade-in font-semibold"
                                    fontFamily={"'Bungee Hairline', sans-serif"}
                                    fontWeight="bold"
                                    style={{ animationDelay: "0.8s" }}
                                >
                                    Instagram
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/noe-alegarbes/"
                                    color="white"
                                    className="fade-in font-semibold"
                                    fontFamily={"'Bungee Hairline', sans-serif"}
                                    fontWeight="bold"
                                    style={{ animationDelay: "1s" }}
                                >
                                    linkedIn
                                </Link>
                            </VStack>
                        </GridItem>

                        <GridItem
                            colSpan={[2, 1]}
                            rowSpan={1}
                            display={"flex"}
                        >
                            <Box className="w-full h-full relative">
                                <Text
                                    className="absolute bottom-0 right-0 p-5 text-white text-end w-full font-[Jura] font-thin sm:w-1/2 md:w-full lg:w-1/2 ml-auto fade-in"
                                    style={{ animationDelay: "1s" }}
                                >
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
                                    nostrum impedit aliquam mollitia, fugiat placeat dicta
                                    quibusdam. Dolor aliquid quod veniam eveniet atque aliquam
                                    minima at ipsum fugiat? Ipsa, vel. Lorem ipsum dolor sit amet
                                    consectetur, adipisicing elit. Quis nostrum impedit aliquam
                                    mollitia, fugiat placeat dicta quibusdam. Dolor aliquid quod
                                    veniam eveniet atque aliquam minima at ipsum fugiat? Ipsa, vel.
                                </Text>
                            </Box>
                        </GridItem>
                    </Grid>
                </Box>
            </Flex>
        </div>
    );
};

export default HomePage;
