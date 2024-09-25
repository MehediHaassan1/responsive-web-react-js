import PropTypes from "prop-types";

const Card = ({ image, title, description }) => {
    return (
        <>
            <div className="border rounded-lg shadow-lg p-4 cursor-pointer hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 h-[420px]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-56 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </>
    );
};

export default Card;

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
