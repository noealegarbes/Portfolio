// components/ThreeScene.tsx
"use client";

import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeScene: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentMount = mountRef.current;
        if (!currentMount) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            currentMount.clientWidth / currentMount.clientHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        renderer.setClearColor(0xffffff);
        currentMount.appendChild(renderer.domElement);

        const geometry = new THREE.TorusKnotGeometry(13, 3, 130, 13, 8, 12);
        const material = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true });
        const torusKnot = new THREE.Mesh(geometry, material);
        scene.add(torusKnot);

        camera.position.z = 13;

        let targetZoom = 30; // Initial zoom level
        const getRandomZoom = () => Math.random() * 20 + 10; // Random zoom between 10 and 30
        const zoomChangeInterval = 2000; // Change zoom every 2 seconds

        setInterval(() => {
            targetZoom = getRandomZoom();
        }, zoomChangeInterval);

        const animate = () => {
            requestAnimationFrame(animate);
            torusKnot.rotation.y += 0.005;

            // Smoothly transition to the target zoom level
            camera.position.z += (targetZoom - camera.position.z) * 0.05;

            renderer.render(scene, camera);
        };
        animate();

        return () => {
            currentMount.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
            <div
                ref={mountRef}
                style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 1,
                }}
            ></div>
            <Flex
                justifyContent="space-around"
                alignItems="center"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 2,
                    pointerEvents: "none",
                }}
            >
                <Box
                    w={"95vw"}
                    h={"95vh"}
                    bg="none"
                    backdropFilter={"auto"}
                    backdropBlur={"3px"}
                    backdropBrightness={"20%"}
                    backdropInvert={"80%"}
                    rounded={"20px"}
                    boxShadow="0 0 10px rgba(0, 0, 0, 0.50)" // Custom shadow
                >
                    <Stack></Stack>
                </Box>
            </Flex>
        </div>
    );
};

export default ThreeScene;
