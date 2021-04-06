import Sequelize, {Model} from 'sequelize';

class Curriculos extends Model {
  static init(sequelize){
    super.init(
    {
      formacao: Sequelize.TEXT('tiny'),
      habilidade: Sequelize.TEXT('tiny'),
      especializacao: Sequelize.TEXT('tiny'),
      certificacoes: Sequelize.BLOB,
    },
    {
      sequelize,
    });
    return this; 
  }
  static associate(models) {
    this.belongsTo(models.Usuarios, {foreignKey: 'usuario_id'});
  }
}

export default Curriculos;
