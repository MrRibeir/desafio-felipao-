class Hero {
    constructor(name, age, type) {
      this.nome = name;
      this.idade = age;
      this.type = type;
    }
  
    attack() {
      let attack;
      switch (this.type) {
             case 'warrior':
              attack = 'usou espada';
          break;
          case 'mage':
              attack = 'usou magia';
          break;
          case 'monk':
              attack = 'usou artes marciais';
          break;
            case 'ninja':
              attack = 'usou shuriken';
          break;
      }
      console.log(`O ${this.type} atacou, ele(a) ${attack}`);
    }
  }
  
  // Exemplo de uso da classe Hero
  const warrior = new Hero('Aragorn', 35, 'warrior');
  warrior.attack(); // Saída: O guerreiro atacou usando usou espada
  
  const mage = new Hero('Gandalf', 1000, 'mage');
  mage.attack(); // Saída: O mago atacou usando usou magia
  
  const monk = new Hero('Li', 30, 'monk');
  monk.attack(); // Saída: O monge atacou usando usou artes marciais
  
  const ninja = new Hero('Hanzo', 25, 'ninja');
  ninja.attack(); // Saída: O ninja atacou usando usou shuriken
  
  
  