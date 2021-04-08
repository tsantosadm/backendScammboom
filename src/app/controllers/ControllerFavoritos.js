import Favoritos from '../models/Favoritos';
import Publicacoes from '../models/Publicacoes';
import Usuarios from '../models/Usuarios';

class ControllerFavoritos {
  async store(req, res){

    const usuario = req.UsuarioId;
    
    req.body.usuario_id = usuario;

    const existeUsuario = await Usuarios.findOne({where: {id: usuario}});
    
    if(!existeUsuario){
        return res.status(400).json({error: 'Usuário não encontrado!'})
    }

    const favorito = await Favoritos.create(req.body);

    return res.json(favorito);
  }

  async indexUsuario(req, res){
    const usuario = req.UsuarioId;

    const existeUsuario = await Usuarios.findOne({where: {id: usuario}});
    
    if(!existeUsuario){
        return res.status(400).json({error: 'Usuário não encontrado!'})
    }

    //Relacionamento de publicação e usuário
    const favoritos = await Favoritos.findAll({
        where: {usuario_id: usuario},
        order: ['id'],
        include: [
            {
                model: Usuarios,
                attributes: ['id', 'nome', 'email'],
            }
        ],
        include: [
          {
              model: Publicacoes,
              attributes: ['titulo', 'descricao', 'troca_por'],
          }
      ]
    });

    if(favoritos.length === 0 ) {
        return res.json({"message": "Nenhum favorito cadastrado pelo usuário!"});
    }

    return res.json(favoritos);
}
}

export default new ControllerFavoritos();
