import { defineConfig } from "cypress";
import { Client } from "pg";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        async queryDb(query: string) {
          const client = new Client({
            user: "postgres",
            host: "localhost",
            database: "testdb",
            password: "password123",
            port: 5432,
          });

          await client.connect();
          const result = await client.query(query);
          await client.end();
          return result.rows;
        },
      });
    },
    specPattern: "cypress/tcs/**/*.cy.{js,ts,jsx,tsx}"
  }
});