import { useEffect, useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import { Menu, X } from "lucide-react";
import NavItem from "./NavItem";

const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "#" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const mobileMenuAnimation = useSpring({
        transform: isOpen ? "translateX(0%)" : "translateX(-100%)",
        opacity: isOpen ? 1 : 0,
        config: config.gentle,
    });

    const logoAnimation = useSpring({
        from: { transform: "translateY(-20px)", opacity: 0 },
        to: { transform: "translateY(0)", opacity: 1 },
        config: config.wobbly,
    });

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                setIsOpen(false);
            }
        });
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-800/50 text-white z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <animated.a
                            style={logoAnimation}
                            href="#"
                            className="text-xl font-bold"
                        >
                            Logo
                        </animated.a>
                    </div>
                    {/* Desktop Nav */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item, index) => (
                                <NavItem
                                    key={item.name}
                                    item={item}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <animated.div
                style={mobileMenuAnimation}
                className="md:hidden fixed inset-y-0 left-0 w-3/4 bg-gray-800 overflow-y-auto z-50"
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </animated.div>
        </nav>
    );
}
