
export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=FDh4TC2VBRWls8dpfpSzUV64wd4Zrzcb`;
    const result = await fetch( url );
    const { data } = await result.json();
    
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.original.url
        }
    })

    return gifs;
}