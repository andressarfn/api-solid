import { User } from '../entities/User';

export interface IUsersRepository {
  // vai receber uma string do email e vai retornar um usuário se existir
  findByEmail(email: string): Promise<User>;

  // vai salvar o usuário e não vai retornar nada
  save(user: User): Promise<void>;
}
