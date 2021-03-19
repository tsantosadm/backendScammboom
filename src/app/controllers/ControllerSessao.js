import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import Usuario from '../models/Usuarios';
import authConfig from '../../config/auth';

//Sessão de login do usuário

class ControllerSessao {
  async store(req, res){

    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      senha: Yup.string().required(),
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({error: 'A validação falhou, email ou senha incorretos'});
    }

    const {email, senha} = req.body;

    const usuario = await Usuario.findOne({where: {email}});

    //Condições de verificação de existência no banco de dados
    if (!usuario) {
      return res.status(401).json({error: 'E-mail não encontrado!'})
    }
    if(!(await usuario.checaSenha(senha))){
      return res.status(401).json({error: 'Senha incorreta!'})
    }

    const { id, nome } = usuario;

    return res.json({
      usuario: {
        id,
        email,
        nome
      },
      token: jwt.sign({id}, authConfig.segredo, {
        expiresIn: authConfig.expiresIn,
      }),
    })
  }
}

export default new ControllerSessao();
