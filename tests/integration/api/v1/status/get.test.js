test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt); //check if date is ISO8601

  expect(Number(responseBody.server_version)).toBe(16); //hardcoded test version for Postgres Version

  expect(Number(responseBody.max_connections)).toBe(100); //hardcoded test for max connections

  expect(Number(responseBody.used_connections)).toBeLessThanOrEqual(
    Number(responseBody.max_connections)
  ); //Test for used connections
});
