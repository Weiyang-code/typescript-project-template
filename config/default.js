const projectId = "template-project";

exports.api = {
  port: 8180,
};

exports.postgres = {
  host: "db",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "oee",
};

exports.mongodb = {
  host: "db",
  port: 27017,
  user: "admin",
  password: "mongodb",
  database: "project-template",
};
