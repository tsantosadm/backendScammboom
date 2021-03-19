import Sequelize, {Model} from 'sequelize';

class Arquivo extends Model {
  static init(sequelize){
    super.init({
      nome: Sequelize.STRING,
      path: Sequelize.STRING,
    },
    {
      sequelize,
    }
    );
    return this;
  }
}

export default Arquivo;
