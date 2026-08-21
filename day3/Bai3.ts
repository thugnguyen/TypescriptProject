type HeaderPair = [string, string];
function convertHeadersToObject(headers: HeaderPair[]): Record<string, string> {
    return Object.fromEntries(headers);
}
console.log(convertHeadersToObject([["Content-Type", "application/json"], ["Authorization", "Bearer token"]]));