import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui

    if (!user_id) {
      throw new Error("User id is required");
    }

    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User doesn't exist");
    }

    if (!user.admin) {
      throw new Error("You are not an admin");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
