import Card from "./Card";

const cardsData = [
    {
        id: 1,
        image: "https://i.ibb.co/d6YPqkD/steadfat-card-1.jpg",
        title: "The Power of Icebergs",
        description:
            "Massive icebergs drift silently, showcasing the immense power and beauty of glaciers.",
    },
    {
        id: 2,
        image: "https://i.ibb.co/C2frxCF/steadfat-card-2.jpg",
        title: "The Beauty of Arctic Wilderness",
        description:
            "The frozen Arctic is a stunning, icy landscape teeming with life in extreme conditions.",
    },
    {
        id: 3,
        image: "https://i.ibb.co/X72rQCG/steadfat-card-3.jpg",
        title: "The Magic of Snowflakes",
        description:
            "Each snowflake is a unique masterpiece, turning the world into a magical winter wonderland.",
    },
    {
        id: 4,
        image: "https://i.ibb.co/FY3kt91/steadfat-card-4.jpg",
        title: "Nature’s Hidden Sculptures",
        description:
            "Hidden within glaciers, ice caves reveal stunning blue walls sculpted by nature’s hand.",
    },
];

const Cards = () => {
    return (
        <div className="p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cardsData.map((card, index) => (
                    <Card
                        key={index}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Cards;
