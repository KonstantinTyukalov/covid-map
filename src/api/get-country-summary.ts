import getCountries from "./get-countries";
import { Country } from "../models/country-data";

const getCountriesSummary = async () => {
    const countries = (await getCountries()) as Country[];
    console.log("countries ", countries);
    // const cs = countries.map(async (c) => {
    //     const res = await fetch(
    //         `https://api.covid19api.com/country/${c.Slug}/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-03-10T00:00:00Z`
    //     );
    //     const data = (await res.json()) as CountryData[];
    //     return data;
    // });
    // console.log("cs ", cs);
    // const res = await fetch(
    //     "https://api.covid19api.com/country/south-africa/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z"
    // );
    // const data = (await res.json()) as CountryData[];
    // console.log("country summary", data);
};
export default getCountriesSummary;
