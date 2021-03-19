import * as Yup from  'yup';
import Usuario from '../models/Usuarios';

class ControllerUsuario {
  async store(req, res){

    //Construo um esquema de validação. 'Requerid' é obrigatório e 'min' é o tamanho mínimo
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      email: Yup.string().email().required(),
      numero_de_celular: Yup.string().required().min(9),
      senha: Yup.string().required().min(6),
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({error: 'A validação falhou'});
    }

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

    //Construo um esquema de validação. 'Requerid' é obrigatório e 'min' é o tamanho mínimo
    //When é uma estrutura condicional que trabalha como o equanto
    const schema = Yup.object().shape({
      nome: Yup.string(),
      email: Yup.string(),
      senhaAntiga: Yup.string().min(6),
      senha: Yup.string().min(6).when('senhaAntiga',
      (senhaAntiga, field) =>
        senhaAntiga ? field.required() : field
      ),
      confirmaSenha: Yup.string().when('senha', (senha, field) =>
        senha ? field.required().oneOf([Yup.ref('senha')]) : field
      ),
    });

    console.log(schema);

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({error: 'A validação falhou, verifique os campos de senha'});
    }

    const {email, senhaAntiga} = req.body;

    //Busca o usuário pelo id no banco de dados
    const usuario = await Usuario.findByPk(req.UsuarioId);

    //Verifica se o email é igual ao cadastrado
    if (email !== usuario.email) {

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
