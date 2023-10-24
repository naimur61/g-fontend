import { Box, Stack, Typography } from "@mui/material";
import logo from "../assets/logo.png";

const Header = () => {
	return (
		<Stack direction="row" spacing={0.7} alignItems="center">
			<Box component="img" sx={{ width: "40px" }} src={logo} alt="logo" loading="lazy" />
			<Typography variant="h6" fontWeight="Bold">
				Get Global
			</Typography>
		</Stack>
	);
};

export default Header;
