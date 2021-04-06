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
  static associate(models) {
    this.hasOne(models.Publicacoes, {foreignKey: 'categoria_id'});
   }
}

export default Categorias;
