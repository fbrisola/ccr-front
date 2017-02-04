import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let people = [
    { id: 1, name: 'Fernando', lastname: 'Brisola Batista', gender: 'Masculino', birthdate: '03/12/1969', cel: '+55 11 99291-3413', email: 'fbrisola@gmail.com', married: true },
    { id: 2, name: 'Celia Magda', lastname: 'Moreira Marques Brisola Batista', gender: 'Feminino', birthdate: '08/07/1971', cel: '+55 11 99433-0180', email: 'celiammarques@gmail.com', married: true },
    { id: 3, name: 'Raphael', lastname: 'Moreira Marques Brisola Batista', gender: 'Masculino', birthdate: '07/04/2005', cel: '+55 11 55555-5555', email: 'raphaelmmbb@gmail.com', married: false },
    { id: 4, name: 'Daniel', lastname: 'Moreira Marques Brisola Batista', gender: 'Masculino', birthdate: '09/04/2009', cel: '+55 11 55555-5555', email: 'daniel@daniel.com', married: false },
    { id: 5, name: 'Fernanda', lastname: 'Moreira Marques Brisola Batista', gender: 'Feminino', birthdate: '05/06/2012', cel: '+55 11 55555-5555', email: 'fernanda@fernanda.com', married: false }
    ];
    return {people};
  }
}
