import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Skill from './Skill';

/**
 * @Entity Associa a class User à tabela users
 * @Column Indica que cada item representa uma coluna da tabela users
 */
@Entity('users')
class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    last_name: string;

    @Column()
    birth_date: string;

    /**
     * Relacionamento um para muitos
     * - ignore essa parte até a que chegue o 4º passo conforme o README.md
     */
     @OneToMany(() => Skill, skill => skill.user, {
         cascade: ['insert', 'update', 'remove']
     })
     @JoinColumn({ name: 'users_id' })
     skill: Skill[];

}

export default User;
