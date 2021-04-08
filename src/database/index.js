import Sequelize from 'sequelize';
import Usuarios from '../app/models/Usuarios';
import Arquivos from '../app/models/Arquivos';
import Categorias from '../app/models/Categorias';
import databaseConfig from '../config/database';
import Publicacoes from '../app/models/Publicacoes';
import Curriculos from '../app/models/Curriculos';
import Favoritos from '../app/models/Favoritos';

const models = [Usuarios, Arquivos, Categorias, Publicacoes, Curriculos, Favoritos];

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
