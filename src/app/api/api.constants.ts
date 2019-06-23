export class APIConstants {
    public static NEWS_API_KEY = 'e29330d6a4654d8eb0ed259a617a3c66';
    private static BASE_URL = 'https://newsapi.org/v2';
    public static HEADLINES = `${APIConstants.BASE_URL}/top-headlines`;
    public static EVERYTHING = `${APIConstants.BASE_URL}/everything`;
    public static SOURCES = `${APIConstants.BASE_URL}/sources`;
}