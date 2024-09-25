import { useSpring, animated } from "@react-spring/web";
import PropTypes from "prop-types";
import { useEffect } from "react";

const CardModal = ({ isOpen, onClose, image, title, description }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    const modalSpring = useSpring({
        transform: isOpen ? "scale(1)" : "scale(0.9)",
        opacity: isOpen ? 1 : 0,
        config: { tension: 200, friction: 20 },
    });

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 text-white backdrop-blur-sm">
            <animated.div
                style={modalSpring}
                className=" rounded-lg shadow-lg w-11/12 sm:w-3/4 lg:w-2/5 overflow-hidden"
            >
                <button className="text-red-700 text-3xl p-1" onClick={onClose}>
                    &times;
                </button>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-60 object-cover rounded"
                />
                <div className="p-4">
                    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                    <p className="text-gray-300">{description}</p>
                </div>
            </animated.div>
        </div>
    );
};

export default CardModal;

CardModal.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};
