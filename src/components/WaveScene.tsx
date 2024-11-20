"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import Stats from "stats.js";
import { Box, Flex, Text } from "@chakra-ui/react";

const WaveParticles: React.FC = () => {
    const mountRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let container: HTMLDivElement;
        let camera: THREE.PerspectiveCamera;
        let scene: THREE.Scene;
        let renderer: THREE.WebGLRenderer;
        let particles: THREE.Points;
        let count = 0;
        const SEPARATION = 10,
            AMOUNTX = 50,
            AMOUNTY = 50;
        // let windowHalfX = window.innerWidth / 2;
        // let windowHalfY = window.innerHeight / 2;
        let containerWidth = 0;
        let containerHeight = 0;

        function init() {
            container = mountRef.current!;
            containerWidth = container.clientWidth;
            containerHeight = container.clientHeight;

            // Camera
            camera = new THREE.PerspectiveCamera(70, containerWidth / containerHeight, 0.1, 40000);
            camera.rotation.set(-1000, -95, 100);
            camera.position.set(-100, 70, 0);

            // Scene
            scene = new THREE.Scene();

            // Particles
            const numParticles = AMOUNTX * AMOUNTY;
            const positions = new Float32Array(numParticles * 3);
            const scales = new Float32Array(numParticles);

            let i = 0,
                j = 0;
            for (let ix = 0; ix < AMOUNTX; ix++) {
                for (let iy = 0; iy < AMOUNTY; iy++) {
                    positions[i] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
                    positions[i + 1] = 0;
                    positions[i + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
                    scales[j] = 1;
                    i += 3;
                    j++;
                }
            }

            const geometry = new THREE.BufferGeometry();
            geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

            const material = new THREE.ShaderMaterial({
                uniforms: {
                    color: { value: new THREE.Color(0xffffff) },
                },
                vertexShader: `
          attribute float scale;
          void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = scale * (150.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
                fragmentShader: `
          uniform vec3 color;
          void main() {
            if (length(gl_PointCoord - vec2(0.5, 0.5)) > 0.475) discard;
            gl_FragColor = vec4(color, 1.0);
          }
        `,
            });

            particles = new THREE.Points(geometry, material);
            scene.add(particles);

            // Renderer
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(containerWidth, containerHeight);
            renderer.setAnimationLoop(animate);
            container.appendChild(renderer.domElement);

            // Resize event
            window.addEventListener("resize", onWindowResize);
        }

        function onWindowResize() {
            containerWidth = container.clientWidth;
            containerHeight = container.clientHeight;

            camera.aspect = containerWidth / containerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(containerWidth, containerHeight);
        }

        function animate() {
            render();
        }

        function render() {
            const positions = particles.geometry.attributes.position.array as Float32Array;
            const scales = particles.geometry.attributes.scale.array as Float32Array;

            let i = 0,
                j = 0;
            for (let ix = 0; ix < AMOUNTX; ix++) {
                for (let iy = 0; iy < AMOUNTY; iy++) {
                    positions[i + 1] =
                        Math.sin((ix + count) * 0.3) * 10 + Math.sin((iy + count) * 0.5) * 10;
                    scales[j] =
                        (Math.sin((ix + count) * 0.3) + 1) * 5 +
                        (Math.sin((iy + count) * 0.5) + 1) * 5;
                    i += 3;
                    j++;
                }
            }

            particles.geometry.attributes.position.needsUpdate = true;
            particles.geometry.attributes.scale.needsUpdate = true;

            renderer.render(scene, camera);
            count += 0.04;
        }

        init();

        return () => {
            if (container) {
                container.removeChild(renderer.domElement);
            }
            window.removeEventListener("resize", onWindowResize);
        };
    }, []);

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                backgroundColor: "black",
            }}
        >
            <div
                ref={mountRef}
                style={{
                    width: "95vw",
                    height: "95vh",
                    borderRadius: "10px",
                    overflow: "hidden",
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
                    backdropBlur={"18px"}
                    rounded={"10px"}
                    boxShadow="0 0 10px rgba(0, 0, 0, 0.50)" // Custom shadow
                >
                    <Text
                        padding={"10px"}
                        paddingBottom={0}
                        color={"white"}
                        fontSize={"80px"}
                        fontWeight={"bold"}
                    >
                        DIONICO NOE ALEGARBES
                    </Text>
                    <Text
                        padding={"13px"}
                        paddingTop={"0"}
                        color={"white"}
                        fontSize={"20px"}
                        fontWeight={"thin"}
                    >
                        Digital Craftsman [ Artist / Developer / Designer ]
                    </Text>
                </Box>
            </Flex>
        </div>
    );
};

export default WaveParticles;
