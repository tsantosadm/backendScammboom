import Sequelize, {Model} from 'sequelize';
import bcrypt from 'bcryptjs';

class Usuarios extends Model {
  static init(sequelize){
    super.init({
      nome: Sequelize.STRING,
      email: Sequelize.STRING,
      senha: Sequelize.VIRTUAL,
      senha_hash: Sequelize.STRING,
      numero_de_celular: Sequelize.STRING,
      data_de_nascimento: Sequelize.DATEONLY,
      foto: Sequelize.BLOB,
    },
    {
      sequelize,
    }
    );
    //Só gera um hash de senha se eu criar uma nova senha
    this.addHook('beforeSave', async (usuario) => {
      if (usuario.senha) {
        usuario.senha_hash = await bcrypt.hash(usuario.senha, 8);
      }
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Arquivo, {foreignKey: 'avatar_id'})
  }

  //Verifica se a senha enviada corresponde à cadastrada
  checaSenha(senha){
    return bcrypt.compare(senha, this.senha_hash);
  }

}

export default Usuarios;
