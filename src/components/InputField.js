import { Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import React from "react";
import Loader from "./Loader";

const Input = () => {
	const [open, setOpen] = React.useState(false);
	const { handleSubmit, register, reset } = useForm();

	const onSubmit = async (data) => {
		setOpen(true);
		try {
			const response = await axios.post("https://portfolio-server-gold.vercel.app/email", {
				data,
			});
			setOpen(false);
			if (response.data.result.acknowledged === true) {
				alert(response.data.massage);
			}
		} catch (error) {
			alert("Error:", error);
		}
		reset();
	};

	return (
		<Box>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Box
					component="input"
					required
					type="email"
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
					{...register("email")}
				/>

				<Button
					variant="contained"
					type="submit"
					sx={{
						backgroundImage: "linear-gradient(to right, rgb(83 101 245) 0%, rgb(166 109 239) 100%)",
						borderRadius: "20px",
						position: "absolute",
						margin: "5px -7.2rem",
					}}
				>
					Notify me
				</Button>
			</form>
			<Loader open={open} />
		</Box>
	);
};

export default Input;
