type TestCaseUser = {
    username: string;
    email: string;
    age: number;
    role: "admin" | "user" | "guest";
};
const testUsers : TestCaseUser[] = [
    { username: "admin1", email: "admin1@example.com", age: 30, role: "admin" },
    { username: "admin2", email: "admin2@example.com", age: 17, role: "admin" },
    { username: "admin3", email: "admin3@example.com", age: 18, role: "admin" },
    { username: "user1", email: "user1@example.com", age: 25, role: "user" },
    { username: "guest1", email: "guest1@example.com", age: 20, role: "guest" }
];
function getValidAdminUsers(users: TestCaseUser[]): string[] {
    return users.filter(user => user.role === "admin" && user.age >= 18).map(user => user.email);
}
console.log(getValidAdminUsers(testUsers)); // Output: ["admin1", "admin3"]