import Curriculos from '../models/Curriculos';
import Usuarios from '../models/Usuarios';

class ControllerCurriculo {
    async store(req, res){

        const usuario = req.UsuarioId;

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

        req.body.usuario_id = usuario;

        const curriculo = await Curriculos.create(req.body);
        
        return res.json(curriculo);
    }

    async indexUsuario(req, res){
        const usuario = req.UsuarioId;

        const existeUsuario = await Usuarios.findOne({where: {id: usuario}});
        
        if(!existeUsuario){
            return res.status(400).json({error: 'Usuário não encontrado!'})
        }

        const curriculos = await Curriculos.findAll({
            where: {usuario_id: usuario},
            order: ['id'],
            include: [
                {
                    model: Usuarios,
                    attributes: ['id', 'nome', 'email'],
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