export class APIConstants {
    // News API key
    public static NEWS_API_KEY = 'e29330d6a4654d8eb0ed259a617a3c66';

    // Base url
    private static BASE_URL = 'https://newsapi.org/v2';

    // Url for headlines
    public static HEADLINES = `${APIConstants.BASE_URL}/top-headlines`;

    // Url for everything
    public static EVERYTHING = `${APIConstants.BASE_URL}/everything`;

    // Url for sources
    public static SOURCES = `${APIConstants.BASE_URL}/sources`;
}