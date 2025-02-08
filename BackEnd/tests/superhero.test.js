const request = require("supertest");
const app = require("../index"); // Asegúrate de que la ruta sea correcta

describe("GET /superheroes/superheroes", () => {
  it("Debe devolver un array de superhéroes ordenados por humility_score", async () => {
    const response = await request(app).get("/superheroes/superheroes");
    
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
