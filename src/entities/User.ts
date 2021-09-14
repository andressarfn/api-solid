import { uuid } from 'uuidv4';

// atributos
export class User {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  //  Construtor
  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);
    // criando um id através do uuuidv4
    if (!id) {
      this.id = uuid();
    }
  }
}
