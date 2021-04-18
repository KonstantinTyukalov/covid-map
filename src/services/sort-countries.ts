import getSummary from "../api/get-summary";
 export const sortCountries = async () => {
    const data = await getSummary();
    const sorted = data?.Countries.sort(
        (c1, c2) => c2.TotalConfirmed - c1.TotalConfirmed
    );
    return sorted;
};

export const getFirstCountries = async (count: number) => {
    const countries = await sortCountries();
    return countries?.slice(0, count);
};
