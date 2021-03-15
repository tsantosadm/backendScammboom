import jwt from 'jsonwebtoken';
import {promisify} from 'util';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  //Se não tem token, não autorizado
  if (!authHeader) {
    return res.status(401).json({error: 'Não autorizado!'})
  }

  //Pega somente o token de acesso e descarta o Bearer
  const [, token] = authHeader.split(' ');

  //Tenta pegar o id do usuário
  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.segredo);

    req.UsuarioId = decoded.id;

    return next();

  } catch (error) {
    return res.status(401).json({erro: 'Token inválido!' })
  }
}
