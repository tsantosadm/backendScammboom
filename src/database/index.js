import Sequelize from 'sequelize';
import Usuarios from '../app/models/Usuarios';
import Aquivos from '../app/models/Arquivos';
import databaseConfig from '../config/database';

const models = [Usuarios, Aquivos];

class Database {
  constructor(){
    this.init();
  }
  init(){
    this.connection = new Sequelize(databaseConfig);
    models.
      map(model => model.init(this.connection))
     .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
