const baseUrl: string = "https://demoqa.com/";
const timeout: number = 30000;
const isHeadless: boolean = true;
function getTestConfig (): string {
    return `Running test on ${baseUrl} with timeout ${timeout} ms (Headless: ${isHeadless})`;
}
console.log(getTestConfig());