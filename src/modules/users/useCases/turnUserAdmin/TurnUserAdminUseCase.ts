import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userToBeAdmin = this.usersRepository.findById(user_id);

    if (userToBeAdmin.admin) {
      throw new Error("User already is admin");
    }

    const user = this.usersRepository.turnAdmin(userToBeAdmin);

    return user;
  }
}

export { TurnUserAdminUseCase };
