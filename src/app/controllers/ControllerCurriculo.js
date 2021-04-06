import Curriculos from '../models/Curriculos';
import Usuarios from '../models/Usuarios';
import * as Yup from  'yup';

class ControllerCurriculo {
    async store(req, res){

        //Construo um esquema de validação. 'Requerid' é obrigatório
        const schema = Yup.object().shape({
        usuario_id: Yup.number().required().positive().integer(),
        });

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({error: 'A validação falhou, porque não existe um usuário na requisição!'});
        }

        const usuario = req.body.usuario_id;

        const existeUsuario = await Usuarios.findOne({where: {id: usuario}});
        if(!existeUsuario){
            return res.status(400).json({error: 'Usuário não encontrado para a associação a currículo!'})
        }

        //Verifica se o usuário já criou um currículo
        const curriculos = await Curriculos.findAll({
            where: {usuario_id: usuario}
        });

        if (curriculos.length >= 1) {
            return res.status(400).json({error: 'Currículo já cadastrado!'});
        }


        const curriculo = await Curriculos.create(req.body);
        
        return res.json(curriculo);
    }

    async indexUsuario(req, res){
        const usuario = req.body.usuario_id;

        const existeUsuario = await Usuarios.findOne({where: {id: usuario}});
        
        if(!existeUsuario){
            return res.status(400).json({error: 'Usuário não encontrado!'})
        }

        const curriculos = await Curriculos.findAll({
            where: {usuario_id: usuario},
            order: ['id'],
            attributes: ['formacao', 'habilidade', 'especializacao'],
            include: [
                {
                    model: Usuarios,
                    attributes: ['id', 'nome'],
                }
            ]
        });

        if(curriculos.length === 0 ) {
            return res.json({"message": "Nenhum currículo cadastrado pelo usuário!"});
        }

        return res.json(curriculos);
    }
}

export default new ControllerCurriculo();