export default interface CountryData {
    Country: string;
    CountryCode: string;
    Province: string;
    City: string;
    CityCode: string;
    Lat: string;
    Lon: string;
    Cases: number;
    Status: string;
    Date: Date;
}

export interface Country {
    Country: string;
    Slug: string;
    ISO2: string;
}