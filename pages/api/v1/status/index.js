import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const result = await database.query(
    "SELECT SUBSTRING(version() FROM 'PostgreSQL ([0-9]+\\.[0-9]+)') AS postgres_version"
  );
  const version = result.rows[0].postgres_version;

  const maxConnections = await database.query("SHOW MAX_CONNECTIONS");

  const usedConnections = await database.query(
    "SELECT COUNT(*) FROM pg_stat_activity"
  );

  response.status(200).json({
    updated_at: updatedAt,
    server_version: version,
    max_connections: maxConnections.rows[0].max_connections,
    used_connections: usedConnections.rows[0].count,
  });
}

export default status;
