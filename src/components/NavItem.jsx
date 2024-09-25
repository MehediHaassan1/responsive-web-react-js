import { useSpring, animated, config } from "@react-spring/web";
import PropTypes from "prop-types";

export default function NavItem({ item, index }) {
    const desktopItemAnimation = useSpring({
        from: { transform: "translateY(-20px)", opacity: 0 },
        to: { transform: "translateY(0)", opacity: 1 },
        delay: 200 * index,
        config: config.wobbly,
    });

    return (
        <animated.a
            href={item.href}
            style={desktopItemAnimation}
            className="relative px-3 py-2 rounded text-sm font-medium hover:bg-gray-700 transition-colors duration-300 ease-in-out group"
        >
            {item.name}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left group-hover:origin-left" />
        </animated.a>
    );
}

NavItem.propTypes = {
    item: PropTypes.shape({
        href: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
};
