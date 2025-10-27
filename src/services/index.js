import axios from "axios";

export const getTransactionHistory = async () => {
	const { data } = await axios.get(
		`${import.meta.env.VITE_BASE_URL}/get-historical-transactions?limit=10`
	);

	return data.data;
};

export const getSupportedNetworks = async () => {
	const { data } = await axios.get(
		`${import.meta.env.VITE_BASE_URL}/supported-chains`
	);

	return data;
};
