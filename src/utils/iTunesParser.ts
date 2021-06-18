import Feed from "../models/Feed";

export const iTunesParser = (json: string): Array<Feed> => {
    const data = JSON.parse(json);
    const entry = data["feed"]["entry"];

    const feeds: Array<Feed> = [];

    for (let i = 0; i < entry.length; i++) {
        const feed: Feed = {
            id: entry[i]["id"]["attributes"]["im:id"],
            category: entry[i]["category"]["attributes"]["label"],
            artist: entry[i]["im:artist"]["label"],
            title: entry[i]["im:name"]["label"],
            imageUri: entry[i]["im:image"][1]["label"],
            price: entry[i]["im:price"]["label"],
            releaseDate: entry[i]["im:releaseDate"]["attributes"]["label"],
            link: entry[i]["link"]["attributes"]["href"]
        }

        feeds.push(feed);
    }

    return feeds;
}