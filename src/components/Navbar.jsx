import { Menu, X } from "lucide-react";
import { useState } from "react";
export default function Navbar() {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const links = [
		{ href: "#about-us", label: "Sobre Nosotros" },
		{ href: "#pricing", label: "Nuestras Pizzas" },
		{ href: "#testimonial", label: "Nuestros Clientes" },
		{ href: "#footer", label: "Pedi Tu Pizza" },
	];
	return (
		<nav className="fixed top-0 w-full z-99 transition-all duration-150 bg-orange-200/60 backdrop-blur-sm select-none">
			{/* container navbar */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
					<div className="flex items-center gap-2">
						{/* logo img */}
						<img src="public/logo.png" alt="Pizzería La Buena Vida" className="size-10 sm:size-14 md:size-16" />
						{/* logo title */}
						<span className="flex gap-1 text-sm sm:text-base md:text-xl font-medium">
							<span className="text-olive-700">Pizzería</span>
							<span className="text-amber-700">La Buena Vida</span>
						</span>
					</div>
					{/* links */}
					<div className="hidden md:flex items-center space-x-6 lg:space-x-8">
						<a href="#about-us" className="text-black hover:text-olive-600 text-sm lg:text-base active:scale-95">
							Sobre Nosotros
						</a>
						<a href="#pricing" className="text-black hover:text-olive-600 text-sm lg:text-base active:scale-95">
							Nuestras Pizzas
						</a>
						<a href="#testimonial" className="text-black hover:text-olive-600 text-sm lg:text-base active:scale-95">
							Nuestros Clientes
						</a>
						<a
							href="#footer"
							className="border-b-2 border-solid border-amber-300 hover:scale-120 text-amber-950 text-sm lg:text-base active:scale-95"
						>
							Pedi Tu Pizza
						</a>
					</div>
					{/* icon mobile*/}
					<button
						className="md:hidden p-2 text-black active:bg-violet-100"
						onClick={() => {
							setMenuIsOpen((i) => !i);
						}}
					>
						{/* change icon */}
						{menuIsOpen ? <X className="size-5 sm:size-6" /> : <Menu className="size-5 sm:size-6" />}
					</button>
				</div>
			</div>
			{/* menu popup */}
			{menuIsOpen && (
				<div className="md:hidden bg-orange-200/90 backdrop-blur-sm px-4 py-3 flex flex-col gap-3">
					{links.map((link) => (
						<a
							className="border-b-2 border-amber-900 border-solid  rounded-md text-black py-2 px-3 transition-colors duration-150 active:bg-amber-200 active:text-amber-900"
							key={link.href}
							href={link.href}
							onClick={() => setMenuIsOpen(false)}
						>
							{link.label}
						</a>
					))}
				</div>
			)}
		</nav>
	);
}
