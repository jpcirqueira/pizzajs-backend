import Pedido from '../models/pedidos';
import User from '../models/user';

class PedidoController {

    async store(req, res){

        // acha o usuario com o id da sessao
        const user = User.findOne({where: {id: req.userId}});

        
        if(!user){
            //conferir se o usuario existe
            return res.status(401).json({erro: "usuário não encontrado."});
        }

        // colocando o id do usuario na tabela de pedidos
        req.body.user_id = req.userId
        
        const pedido = await Pedido.create(req.body);

        return res.json(pedido);
    }

    async update(req, res){
        const pedidoId = req.params.id

        let pedido = await Pedido.findByPk(pedidoId);;

        if(!pedido){
            return res.status(401).json({erro: "pedido não encontrado."});
        }

        if(!pedido.pedido_ativo){
            return res.status(401).json({erro: "O pedido não está ativo"});
        }

        if(pedido.user_id !== req.userId){
            return res.status(401).json({erro: "Este usuário não pode editar esse pedido"});
        }
        
        await pedido.update(req.body);
    
        return res.json(pedido);
    }
}

export default new PedidoController();