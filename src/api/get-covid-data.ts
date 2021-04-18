import CountryData from "../models/country-data";
export const getData = async () => {
    const res = await fetch(
        "https://api.covid19api.com/country/south-africa/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z"
    );
    const data = (await res.json()) as CountryData;
    console.log("data ", data);
};
