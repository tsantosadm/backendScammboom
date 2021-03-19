import Arquivos from '../models/Arquivos';

class ControllerArquivo {
  async store(req, res){
    const {originalname: nome, filename: path} = req.file;

    const arquivo = await Arquivos.create({
      nome,
      path
    });

    return res.json(arquivo);
  }
}

export default new ControllerArquivo();
