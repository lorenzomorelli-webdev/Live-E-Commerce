/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1", // Mappa l'alias @ alla root del progetto
  },
  moduleDirectories: ["node_modules", "<rootDir>"], // Consenti di risolvere i moduli nella root
};
