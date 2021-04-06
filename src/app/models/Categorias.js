import Sequelize, {Model} from 'sequelize';

class Categorias extends Model {
  static init(sequelize){
    super.init(
    {
      nome: Sequelize.STRING,
    },
    {
      sequelize,
    });
    return this; 
  }
}

export default Categorias;
