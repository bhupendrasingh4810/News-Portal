export class ApiConstants {
    public static NEWS_API_KEY = '46a03abf4424480b8b538c36fd7726a0';
    private static BASE_URL = 'https://newsapi.org/v2/';
    public static HEADLINES = `${ApiConstants.BASE_URL}/top-headlines`;
    public static EVERYTHING = `${ApiConstants.BASE_URL}/everything`;
    public static SOURCES = `${ApiConstants.BASE_URL}/sources`;
}