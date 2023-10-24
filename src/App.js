import { Box } from "@mui/material";
import Header from "./components/Header";
import Cover from "./components/Cover";
import Footer from "./components/Footer";

function App() {
	return (
		<Box
			sx={{
				maxWidth: "1200px",
				mx: "auto",
				px: "1rem",
			}}
		>
			<Header />
			<Cover />
			<Footer />
		</Box>
	);
}

export default App;
