// lib/db.js
import Database from "better-sqlite3";

// Cria uma instância única para evitar múltiplas conexões
const db = new Database("./database.sqlite");

export default db;
