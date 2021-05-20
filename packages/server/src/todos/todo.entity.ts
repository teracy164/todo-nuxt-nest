import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { IsBoolean, IsDateString, IsOptional, MaxLength } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

@Table({
  tableName: 'todos',
  timestamps: true,
})
export class Todo extends Model {
  @ApiPropertyOptional()
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ApiPropertyOptional()
  @IsOptional()
  @MaxLength(30)
  @Column
  contents: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  @Column({ type: DataType.DATEONLY })
  start: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  @Column({ type: DataType.DATEONLY })
  end: Date;

  @ApiPropertyOptional()
  @IsBoolean()
  @Column({ field: 'is_completed', allowNull: false, defaultValue: false })
  isCompleted: boolean;

  @Column({ field: 'created_at' })
  createdAt: Date;

  @Column({ field: 'updated_at' })
  updatedAt: Date;
}
