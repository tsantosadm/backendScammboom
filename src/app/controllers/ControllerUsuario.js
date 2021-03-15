import Usuario from '../models/Usuarios';

class ControllerUsuario {
  async store(req, res){

    const existeUsuario = await Usuario.findOne({where: {email: req.body.email}});

    if(existeUsuario){
      return res.status(400).json({error: 'Usuário já existe!'});
    }

    const {id, nome, email, numero_de_celular } = await Usuario.create(req.body);

    return res.json({
      id,
      nome,
      email,
      numero_de_celular
    });
  }

  //Atualização do usuário (apenas senha e email, por enquanto)
  async update(req, res){
    const {email, senhaAntiga} = req.body;

    //Busca o usuário pelo id no banco de dados
    const usuario = await Usuario.findByPk(req.UsuarioId);
    console.log(email);
    //Verifica se o email é igual ao cadastrado
    if (email ==! usuario.email) {

      const existeUsuario = await Usuario.findOne({where: {email: req.body.email}});
      console.log(existeUsuario);

      if(existeUsuario){
        return res.status(400).json({error: 'Usuário já existe!'});
      }
    }

    //Verifica se o usuário quer mudar a senha antiga
    if (senhaAntiga && !(await usuario.checaSenha(senhaAntiga))) {
      return res.status(401).json({error: 'Senha incorreta!'})
    }

    //Atuaiza o usuário no banco de dados
    const {id, senha} = await usuario.update(req.body);

    return res.json({
      id,
      email,
      senha,
    });
  }
}

export default new ControllerUsuario();
