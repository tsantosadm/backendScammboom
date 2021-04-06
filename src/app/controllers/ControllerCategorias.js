import Categorias from '../models/Categorias';
import * as Yup from  'yup';

class ControllerCategorias {
    async store(req, res){

        //Construo um esquema de validação. 'Requerid' é obrigatório
        const schema = Yup.object().shape({
        nome: Yup.string().required(),
        });

        if(!(await schema.isValid(req.body))){
        return res.status(400).json({error: 'A validação falhou'});
        }

        const nomeCategoria = req.body.nome;

        const existeCategoria = await Categorias.findOne({where: {nome: nomeCategoria}});

        if(existeCategoria){
        return res.status(400).json({error: `A categoria '${nomeCategoria}' já existe!`});
    }
        const categoria = await Categorias.create(req.body);
        
        return res.json(categoria);
    }
}

export default new ControllerCategorias();