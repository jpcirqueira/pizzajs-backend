import Sequelize, { Model } from 'sequelize';

class Pizza extends Model {
    static init(sequelize) {
        super.init(
            {
                sabor: Sequelize.STRING,
                preco: Sequelize.FLOAT,
                ingredientes_padrao: Sequelize.ARRAY(Sequelize.STRING),
                ingredientes_extra_id: Sequelize.ARRAY(Sequelize.INTEGER) ,
            },
            {
                sequelize,
            }
            
        );
    }

    static associate(models){
        this.hasMany(models.ingrediente,{
            foreingkey: 'ingredientes_extra_id',
            as: 'ingrediente_extra',
        });
    }
}

export default Pizza;