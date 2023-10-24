import { Box } from "@mui/material";
import Header from "./components/Header";
import Cover from "./components/Cover";
import Footer from "./components/Footer";
import NotifySection from "./components/NotifySection";

function App() {
	return (
		<Box
			sx={{
				maxWidth: "1880px",
				mx: "auto",
				px: "1rem",
			}}
		>
			<Header />
			<Cover />
			<NotifySection />
			<Footer />
		</Box>
	);
}

export default App;
