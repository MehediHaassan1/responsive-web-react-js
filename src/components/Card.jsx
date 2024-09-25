import PropTypes from "prop-types";
import { useState } from "react";
import CardModal from "./CardModal";

const Card = ({ image, title, description }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div
                className="border rounded-lg shadow-lg p-4 cursor-pointer hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 h-[420px]"
                onClick={handleCardClick()}
            >
                <img
                    src={image}
                    alt={title}
                    className="w-full h-56 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>

            {/* Modal */}
            <CardModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                image={image}
                title={title}
                description={description}
            />
        </>
    );
};

export default Card;

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
