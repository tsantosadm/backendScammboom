module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'scamboom_oficial',
  define: {
    timestamps: true,
    underscored: true, 
    underscoredAll: true, 
  }
}
