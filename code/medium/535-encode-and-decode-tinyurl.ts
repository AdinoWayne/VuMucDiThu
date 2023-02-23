let urls = {};
/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
    let uniqueKey = Date.now().toString(36);
    urls[uniqueKey] = longUrl;
    return "http://tinyurl.com/" + uniqueKey;
};

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
	return urls[shortUrl.split("com/")[1]];
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
