import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Todo extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  contents: string;

  @Column
  start: Date;

  @Column
  end: Date;

  @Column({ field: 'is_completed', allowNull: false, defaultValue: false })
  isCompleted: boolean;
}
