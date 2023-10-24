import { Box, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
	return (
		<Box mt="2rem" mx="auto" maxWidth="700px" textAlign="center" pt="3rem">
			<hr style={{ width: "200px", margin: "0 auto" }} />

			<Typography variant="h3" fontWeight="bold" mt="2rem">
				Join our journey
			</Typography>
			<Typography variant="h5" fontWeight="bold" my="1rem">
				Stay in the loop with updates, sneak peeks, and more. Follow our progress.
			</Typography>
			<Stack direction="row" justifyContent="center" spacing={2} my="5rem">
				<FacebookIcon fontSize="large" />
				<InstagramIcon fontSize="large" />
				<LinkedInIcon fontSize="large" />
			</Stack>
		</Box>
	);
};

export default Footer;
