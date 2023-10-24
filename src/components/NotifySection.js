import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import lock from "../assets/locked.png";
import Input from "./InputField";

const NotifySection = () => {
	return (
		<Box bgcolor="#F4EFF7" py="5rem" mx="-1rem">
			<Box mx="auto" textAlign="center" maxWidth="700px">
				<Typography variant="h2" fontWeight="bold">
					Stay ahead of the curve
				</Typography>

				<Typography variant="h5" my="2rem">
					Get exclusive early access to the finest global job listing. Sign up below and be the first to know
					when we launch.
				</Typography>

				<Input />

				<Stack direction="row" alignItems="baseline" spacing=".5rem" justifyContent="center" my="2rem">
					<Box component="img" src={lock} alt="icon" width="30px" />
					<Typography variant="h6" fontWeight="bold">
						We Value Your Privacy.
					</Typography>
				</Stack>
				<Typography variant="h5">
					Rest assured, your email is safe with us .No spam, just updates about our exclusive launch.
				</Typography>
			</Box>
		</Box>
	);
};

export default NotifySection;
