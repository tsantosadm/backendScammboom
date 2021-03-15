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
}

export default new ControllerUsuario();
