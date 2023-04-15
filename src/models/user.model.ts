import {Model, DataTypes, BuildOptions} from 'sequelize';
import db from '../database/mysql.db.js';
import IUser from '../interfaces/IUser.js';

interface IUserInstance extends Model<IUser>, IUser {}
type IUserModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IUserInstance;
};

export default db.define('User', {
    id_user_info: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.NUMBER},
    id_user: DataTypes.STRING,
    coins: DataTypes.NUMBER,
    id_deck: DataTypes.STRING,
    balance: DataTypes.NUMBER,
    remaining_games: DataTypes.NUMBER,
    final_date: DataTypes.DATE,
}, {
    freezeTableName: true,
    timestamps: false
}) as IUserModelStatic;