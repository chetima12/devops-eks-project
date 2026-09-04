const request = require("supertest");
const app = require("../src/app");

describe("Node.js EKS Application", () => {

    test("GET / should return application information", async () => {
        const response = await request(app)
            .get("/");

        expect(response.statusCode).toBe(200);
        expect(response.body.message)
            .toBe("Welcome to the Node.js EKS DevOps Project");
    });

    test("GET /health should return healthy", async () => {
        const response = await request(app)
            .get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.body.status)
            .toBe("healthy");
    });

    test("GET /api/users should return users", async () => {
        const response = await request(app)
            .get("/api/users");

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });

});
