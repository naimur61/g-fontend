import { Box, Stack, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import cover from "../assets/cover.png";
import earth from "../assets/earth.png";
import handshake from "../assets/handshake.png";
import tools from "../assets/tools.png";

const Cover = () => {
	return (
		<Box my="5rem">
			<Stack
				direction="row"
				alignItems="center"
				spacing={0.5}
				sx={{
					color: "#6C5507",
					backgroundColor: "#F4E4AF",
					width: "fit-content",
					px: "20px",
					borderRadius: "20px",
				}}
			>
				<FiberManualRecordIcon fontSize="10px" />
				<Typography fontSize="13px" fontWeight={600}>
					Coming soon
				</Typography>
			</Stack>

			{/* Banner  */}
			<Stack
				direction={{ xs: "column", xl: "row" }}
				spacing={2}
				justifyContent="space-between"
				alignItems="center"
			>
				{/* Details  */}
				<Box>
					<Typography variant="h3" fontWeight="bold" mt="3rem">
						Unlock Global Opportunities
					</Typography>
					<Typography variant="h5" my="3rem">
						Venturing beyond borders? Dive into a curated list of jobs that come with visa an revocation
						support. Explore, apply, and kickstart your global journey with confidence.
					</Typography>

					{opportunities.map((item, index) => (
						<Box key={index} sx={{ mb: "2rem", backgroundColor: "#F4EFF7", p: "1rem", borderRadius: "5px" }}>
							<Stack direction="row" alignItems="center" spacing={1} mb=".7rem">
								<Box component="img" src={item?.icon} width="25px" height="25px" />
								<Typography variant="h5" fontWeight="bold">
									{item?.title}
								</Typography>
							</Stack>
							<Typography variant="h6">{item?.details} </Typography>
						</Box>
					))}
				</Box>

				{/* Cover Photo  */}
				<Box component="img" src={cover} width="80%" height="80%" mx="auto" />
			</Stack>
		</Box>
	);
};

export default Cover;

const opportunities = [
	{
		icon: earth,
		title: "Global Jobs, Handpicked for You.",
		details:
			"Every job listing we showcase is handpicked, offering visa and relocation assistance. Making your international job hunt seamless.",
	},
	{
		icon: tools,
		title: "Navigate with Insight.",
		details:
			"Get comprehensive insights about each country, ensuring you're well-prepared for your new journey.",
	},
	{
		icon: handshake,
		title: "More Than Just Job Listings.",
		details:
			"Join our vibrant community to seek referrals, explore our pay parity calculator, and understand your potential take-home with out tax calculator.",
	},
];
