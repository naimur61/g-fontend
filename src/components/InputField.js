import { Box, Button, TextField } from "@mui/material";
import React from "react";

const Input = () => {
	return (
		<Box>
			{/* <TextField
				sx={{
					backgroundColor: "white",
					border: "none",
					":focus": { outline: "none" },
				}}
			/> */}

			<Box
				component="input"
				sx={{
					backgroundColor: "white",
					border: "none",
					":focus": { outline: "none" },
					width: "80%",
					padding: "1rem",
					borderRadius: "2rem",
					boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
					fontWeight: "bold",
				}}
				placeholder="Enter your email"
			/>
			<Button
				variant="contained"
				sx={{
					backgroundImage: "linear-gradient(to right, rgb(83 101 245) 0%, rgb(166 109 239) 100%)",
					borderRadius: "20px",
					position: "absolute",
					margin: "5px -7.2rem",
				}}
			>
				Notify me
			</Button>
		</Box>
	);
};

export default Input;
