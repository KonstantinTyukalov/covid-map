import Summary from "../models/summary";
const getSummary = async () => {
    try {
        const res = await fetch("https://api.covid19api.com/summary", {
            method: "GET",
        });
        const data = ((await res.ok) ? res.json() : undefined) as
            | Summary
            | undefined;
        console.log("summary", data)
        return data;
    } catch (err) {
        console.log(err);
    }
};
export default getSummary;
