import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Todo extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  contents: string;

  @Column({ type: DataType.DATEONLY })
  start: Date;

  @Column({ type: DataType.DATEONLY })
  end: Date;

  @Column({ field: 'is_completed', allowNull: false, defaultValue: false })
  isCompleted: boolean;
}
