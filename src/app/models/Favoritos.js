import Sequelize, {Model} from 'sequelize';

class Favoritos extends Model {
  static init(sequelize){
    super.init({},
    {
      sequelize,
    });
    return this; 
  }
  static associate(models) {
    this.belongsTo(models.Publicacoes, {foreignKey: 'publicacao_id'});
    this.belongsTo(models.Usuarios, {foreignKey: 'usuario_id'});
   }
}

export default Favoritos;
 