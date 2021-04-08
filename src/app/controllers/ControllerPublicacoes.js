import Publicacoes from '../models/Publicacoes';
import Usuarios from '../models/Usuarios';
import Categorias from '../models/Categorias';

import * as Yup from  'yup';

class ControllerPublicacoes {
    async store(req, res){
        
        //Construo um esquema de validação. 'Requerid' é obrigatório
        const schema = Yup.object().shape({
        titulo: Yup.string().required(),
        categoria_id: Yup.number().required().positive().integer(),
        troca_por: Yup.string().required(),
        });

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({error: 'A validação falhou'});
        }
        
        const usuario = req.UsuarioId;

        const existeUsuario = await Usuarios.findOne({where: {id: usuario}});
        const existeCategoria = await Categorias.findOne({where: {id: req.body.categoria_id}});

        if(!(existeUsuario && existeCategoria)){
            return res.status(400).json({error: 'Usuário ou Categoria não encontrada!'})
        }

        req.body.usuario_id = usuario;

        const {id, titulo, categoria_id, usuario_id, numero_de_celular, descricao, troca_por, foto_do_item, disponivel} = await Publicacoes.create(req.body);
        
        
        return res.json({
            id,
            titulo, 
            categoria_id, 
            usuario_id, 
            numero_de_celular, 
            descricao, 
            troca_por,
            disponivel,
            foto_do_item
        });
    }

    async index(req, res){
        const publicacoes = await Publicacoes.findAll({where: {disponivel: true}});

        if(publicacoes.length === 0 ) {
            return res.json({"message": "Nenhuma publicação cadastrada!"});
        }
    
        return res.json(publicacoes);
    }

    async indexUsuario(req, res){
        const usuario = req.UsuarioId;

        const existeUsuario = await Usuarios.findOne({where: {id: usuario}});
        
        if(!existeUsuario){
            return res.status(400).json({error: 'Usuário não encontrado!'})
        }

        //Relacionamento de publicação e usuário
        const publicacoes = await Publicacoes.findAll({
            where: {disponivel: true, usuario_id: usuario},
            order: ['id'],
            include: [
                {
                    model: Usuarios,
                    attributes: ['id', 'nome', 'email'],
                }
            ]
        });

        if(publicacoes.length === 0 ) {
            return res.json({"message": "Nenhuma publicação cadastrada pelo usuário!"});
        }

        return res.json(publicacoes);
    }

    async indexCategoria(req, res){
        const categoria = req.params.id;

        const existeCategoria = await Categorias.findOne({where: {id: categoria}});
        
        if(!existeCategoria){
            return res.status(400).json({error: 'Categoria não encontrada!'})
        }

        const publicacoes = await Publicacoes.findAll({
            where: {disponivel: true, categoria_id: categoria},
            order: ['id'],
            include: [
                {
                    model: Categorias,
                    attributes: ['id', 'nome'],
                }
            ]
        });

        if(publicacoes.length === 0 ) {
            return res.json({"message": "Nenhuma publicação cadastrada para a categoria procurada!"});
        }

        return res.json(publicacoes);
    }
}

export default new ControllerPublicacoes();