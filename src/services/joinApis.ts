import getSummary from "../api/get-summary";
import countries from "../modules/countries";
import JoinedApiModel from "../models/joined-api-model";
const joinApis = async () => {
    try {
        const summary = await getSummary();
        if (summary) {
            const countriesArr = summary.Countries;
            const joined: JoinedApiModel[] = countriesArr.map((c) => {
                let i = countries.findIndex(
                    (country) => country.country_code == c.CountryCode
                );
                return {
                    Country: c.Country,
                    TotalConfirmed: c.TotalConfirmed,
                    TotalDeaths: c.TotalDeaths,
                    TotalRecovered: c.TotalRecovered,
                    latlng: countries[i].latlng,
                };
            });
            return joined;
        }
    } catch (err) {
        console.log(err);
    }
};

export default joinApis;
