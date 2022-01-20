import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity } from "typeorm";

@Entity()
export class Movie extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column({ nullable: false })
    movieName: string;

    @Column()
    crawls: string;

    @Column("simple-array")
    characterList: string[]

    @Column({default:0})
    commentCounts: number;

    @Column()
    releaseDate: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}