import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import User from './User';

/**
 * @Entity Associa a class Skill à tabela skills
 * @Column Indica que cada item representa uma coluna da tabela skill
 */
@Entity('skills')
class Skill {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    skill: string;

    /**
     * Relacionamento um para muitos
     * - ignore essa parte até a que chegue o 4º passo conforme o README.md
     */
    @ManyToOne(() => User, user => user.skill)
    @JoinColumn({ name: 'users_id' })
    user: User;
}

export default Skill;
