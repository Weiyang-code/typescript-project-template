const projectId = "template-project";

exports.api = {
  port: 8180,
};

exports.postgres = {
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "oee",
};

exports.mongodb = {
  host: "localhost",
  port: 27017,
  user: "admin",
  password: "mongodb",
  database: "project-template",
};
