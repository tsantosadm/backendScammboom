import Sequelize, {Model} from 'sequelize';

class Publicacoes extends Model {
    static init(sequelize){
    super.init({
      titulo: Sequelize.STRING,
      descricao: Sequelize.STRING,
      numero_de_celular: Sequelize.STRING,
      disponivel: Sequelize.BOOLEAN,
      foto_do_item: Sequelize.BLOB,
      troca_por: Sequelize.STRING,
    },
    {
      sequelize,
    }
    );
    return this;
  }
  static associate(models) {
   this.belongsTo(models.Categorias, {foreignKey: 'categoria_id'})
  }
}

export default Publicacoes; 