export interface PlaceKeyVersion {
    [key: string]: {
        top: number;
        left: number;
        title: string;
        display: string;
        Name: string;
        Country: string;
        Description: string;
        Continent: string;
        Population_Country: number;
        Average_Tourist: number;
        onMap: boolean;
        priority: number;
        Image: string;
    };
}
