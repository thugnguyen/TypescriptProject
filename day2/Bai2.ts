type ClickOption = {
    timeout: number;
    force: boolean;
};
function clickElement(selector: string, options?: ClickOption): void {
    const timeout: number = options?.timeout?? 5000;
    const force: boolean = options?.force?? false;
    console.log(`Clicking ${selector} with timeout ${timeout} ms and Force: ${force}`);
}
//clickElement("#submit-button", { timeout: 10000, force: true });
clickElement("#cancel-button");