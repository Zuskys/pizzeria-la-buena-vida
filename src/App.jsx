import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="min-h-screen bg-amber-100 text-white overflow-hidden">
			<Navbar />
			<Hero />
			<About />
			<Pricing />
			<Testimonial />
			<Footer />
		</div>
	);
};

export default App;
