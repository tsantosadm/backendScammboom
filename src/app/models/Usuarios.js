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
    //Só gerar um hash de senha se eu criar uma nova
    this.addHook('beforeSave', async (usuario) => {
      if (usuario.senha) {
        usuario.senha_hash = await bcrypt.hash(usuario.senha, 8);
      }
    });
    return this;
  }
}

export default Usuarios;
