import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToOne, JoinColumn,ManyToOne } from "typeorm";
import { Movie } from "../movies/movies.entity";

@Entity()
export class Comments extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column({ length: 500 })
    comment: string

    @Column()
    userIp: string

    @ManyToOne(type => Movie, (movie) => movie.id, { onDelete: 'CASCADE', eager: true })
    @JoinColumn()
    movie: Movie

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

}