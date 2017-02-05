import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let people = [
    { id: 1, created_at: '2017-02-04 05:02:33', updated_at: '2017-02-04 05:02:33', name: 'Fernando', lastname: 'Brisola Batista', gender: 'Masculino', birthdate: '03/12/1969', cel: '+55 11 99291-3413', email: 'fbrisola@gmail.com', married: 1, address_id: 2 },
    { id: 2, created_at: '2017-02-04 05:02:33', updated_at: '2017-02-04 05:02:33', name: 'Celia Magda', lastname: 'Moreira Marques Brisola Batista', gender: 'Feminino', birthdate: '08/07/1971', cel: '+55 11 99433-0180', email: 'celiammarques@gmail.com', married: 1, address_id: 2 },
    { id: 3, created_at: '2017-02-04 05:02:33', updated_at: '2017-02-04 05:02:33', name: 'Raphael', lastname: 'Moreira Marques Brisola Batista', gender: 'Masculino', birthdate: '07/04/2005', cel: '+55 11 55555-5555', email: 'raphaelmmbb@gmail.com', married: 0, address_id: 2 },
    { id: 4, created_at: '2017-02-04 05:02:33', updated_at: '2017-02-04 05:02:33', name: 'Daniel', lastname: 'Moreira Marques Brisola Batista', gender: 'Masculino', birthdate: '09/04/2009', cel: '+55 11 55555-5555', email: 'daniel@daniel.com', married: 0, address_id: 2 },
    { id: 5, created_at: '2017-02-04 05:02:33', updated_at: '2017-02-04 05:02:33', name: 'Fernanda', lastname: 'Moreira Marques Brisola Batista', gender: 'Feminino', birthdate: '05/06/2012', cel: '+55 11 55555-5555', email: 'fernanda@fernanda.com', married: 0, address_id: 2 }
    ];
    return {people};
  }
}
