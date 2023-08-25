export interface IOMDBResponse2 {
    Search:movieDetails[]; // an array of objects are returned for the api
    totalResults:number;
}

interface movieDetails {
    Title:string;
    Year:string;
    imdbID:string;
    Poster:string;
    Type:string;
    Error:string;
}