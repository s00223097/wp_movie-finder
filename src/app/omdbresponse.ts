// interface file - defines the shape of json from api
// must match shape of data coming in

export interface IOMDBResponse
{
    Title:string;
    Year:string;
    Director:string;
    Poster:string;
    Error:string;
    Ratings:ratingDetails[]; //Week 7 worksheet q2 last slide
}
//Week 7 worksheet q2 last slide
export interface ratingDetails {
    Source:string;
    Value:string;
}