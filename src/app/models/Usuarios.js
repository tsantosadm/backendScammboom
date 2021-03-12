import Sequelize, {Model} from 'sequelize';

class Usuarios extends Model {
  static init(sequelize){
    super.init({
      nome: Sequelize.STRING,
      email: Sequelize.STRING,
      senha_hash: Sequelize.STRING,
      numero_de_celular: Sequelize.STRING,
      data_de_nascimento: Sequelize.DATEONLY,
      foto: Sequelize.BLOB,
    },
    {
      sequelize,
    }
    );
  }
}

export default Usuarios;
