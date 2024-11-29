// app/page.tsx
import React from "react";
import WaveGeometry from "@/components/WaveScene";
import { Box, Flex, Text, Link, HStack } from "@chakra-ui/react";
const HomePage: React.FC = () => {
    return (
        <div style={{ margin: 0, padding: 0, height: "100vh", width: "100vw" }}>
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
                        backdrop-blur-[20px]
                        sm:backdrop-blur-[15px]
                        lg:backdrop-blur-[20px]
                        flex 
                        flex-col 
                        border 
                        border-solid
                        border-gray-500
                        rounded-[10px] 
                        shadow-[0_0_10px_rgba(0,0,0,0.5)] 
                        pointer-events-auto
                        justify-center
                    "
                    style={{
                        WebkitBackdropFilter: "blur(12px)",
                    }}
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
                            text-center
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
                            text-center
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
                        Software Engineer | Developer
                    </Text>
                    <HStack
                        className="
                                    p-[25px] 
                                    relative 
                                    bottom-0
                                    justify-center
                                "
                        spacing="10px"
                        align={"center"}
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
                        <Text
                            color="white"
                            className="fade-in"
                            style={{ animationDelay: "0.6s" }}
                        >
                            ·
                        </Text>
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
                        <Text
                            color="white"
                            className="fade-in"
                            style={{ animationDelay: "0.9s" }}
                        >
                            ·
                        </Text>
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
                    </HStack>
                </Box>
            </Flex>
        </div>
    );
};

export default HomePage;
