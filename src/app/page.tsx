// app/page.tsx
import React from "react";
import ThreeScene from "../components/ThreeScene";
import WaveGeometry from "@/components/WaveScene";

const HomePage: React.FC = () => {
    return (
        <div>
            {/* <ThreeScene /> */}
            <WaveGeometry />
        </div>
    );
};

export default HomePage;
