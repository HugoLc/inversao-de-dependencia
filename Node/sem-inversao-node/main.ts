// Sem inversão de dependência

interface SUserRepository {
  saveUser(user: SUser): void;
}

class SMongoDBUserRepository implements SUserRepository {
  saveUser(user: SUser): void {
    // Lógica para salvar usuário no MongoDB
    console.log("Usuário salvo no MongoDB:", user);
  }
}

class SUserService {
  private userRepository: SMongoDBUserRepository;

  constructor() {
    this.userRepository = new SMongoDBUserRepository();
  }

  saveUser(user: SUser): void {
    this.userRepository.saveUser(user);
  }
}

class SUser {
  constructor(public name: string, public email: string) {}
}

const Suser = new SUser("Alice", "alice@example.com");
const SuserService = new SUserService();
userService.saveUser(user);
