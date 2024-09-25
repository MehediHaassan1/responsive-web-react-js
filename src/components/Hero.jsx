/* eslint-disable react/jsx-key */
import { useTrail, animated } from "@react-spring/web";

const Hero = () => {
    const items = [
        <p className="uppercase tracking-widest mb-2 overflow-hidden block">
            Explore Nature
        </p>,
        <h1 className="text-6xl md:text-5xl lg:text-6xl overflow-hidden block">
            Experience the Great Outdoors
        </h1>,
        <p className="mt-4 max-w-lg px-4 overflow-hidden block">
            Reconnect with the Earth, embrace adventure in every step, and find
            peace in the breathtaking landscapes that await you beyond the
            hustle and bustle of daily life.
        </p>,
    ];

    const trail = useTrail(items.length, {
        opacity: 1,
        y: 0,
        from: { opacity: 0, y: 30 },
        delay: 200,
    });

    return (
        <div className="relative h-screen overflow-hidden">
            <img
                src="https://images.unsplash.com/photo-1482784160316-6eb046863ece?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Nature"
                className="absolute inset-0 w-full h-full object-cover transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black  to-transparent"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white text-center">
                {trail.map((animation, index) => (
                    <animated.div key={index} style={animation}>
                        {items[index]}
                    </animated.div>
                ))}
            </div>
        </div>
    );
};

export default Hero;
