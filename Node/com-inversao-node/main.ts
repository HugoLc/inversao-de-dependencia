// Com inversão de dependência

interface CUserRepository {
  saveUser(user: CUser): void;
}

class CMongoDBUserRepository implements CUserRepository {
  saveUser(user: CUser): void {
    // Lógica para salvar usuário no MongoDB
    console.log("Usuário salvo no MongoDB:", user);
  }
}

class CUserService {
  private userRepository: CUserRepository;

  constructor(userRepository: CUserRepository) {
    this.userRepository = userRepository;
  }

  saveUser(user: CUser): void {
    this.userRepository.saveUser(user);
  }
}

class CUser {
  constructor(public name: string, public email: string) {}
}

const user = new CUser("Bob", "bob@example.com");
const mongoDBRepository = new CMongoDBUserRepository();
const userService = new CUserService(mongoDBRepository);
userService.saveUser(user);

// Neste segundo exemplo, a classe UserService não cria uma instância direta de MongoDBUserRepository dentro do seu construtor. Em vez disso, recebe um objeto UserRepository por injeção de dependência. Isso torna o código mais flexível, permitindo trocar a implementação de UserRepository sem alterar a lógica da UserService, facilitando testes e facilitando a substituição de implementações específicas.