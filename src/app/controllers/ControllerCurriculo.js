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

        const existeUsuario = await Usuarios.findOne({where: {id: req.body.usuario_id}});
        if(!existeUsuario){
            return res.status(400).json({error: 'Usuário não encontrado para a associação a currículo!'})
        }

        const curriculo = await Curriculos.create(req.body);
        
        return res.json(curriculo);
    }
}

export default new ControllerCurriculo();