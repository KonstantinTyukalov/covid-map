// import Summary from "../models/summary";
const getCountries = async () => {
    const res = await fetch("https://api.covid19api.com/countries", {
        method: "GET",
    });
    const data = await res.json();
    console.log("countries ", data);
    return data;
};
export default getCountries;
