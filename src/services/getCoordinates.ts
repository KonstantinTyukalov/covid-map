import countries from "../modules/countries";

const getCoordinates = () => {
    return countries.map((c) => {
        // console.log(c.latlng);
        return c.latlng;
    });
};
export default getCoordinates;
