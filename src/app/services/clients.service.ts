import { Injectable } from '@angular/core';
import { Client } from '../models/client-model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  clientsChanged = new Subject<Client[]>();
  private clients: Client[] = [
    new Client('Mark', 'mark@test.com', 'test'),
    new Client('John', 'john@test.com', 'test2', 'sample text'),
    new Client('Mary', 'mary@test.com', 'test3'),
    new Client('Jack', 'jack@test.com', 'test4', 'this is a test')
  ];

  constructor() { }

  getClients() {
    this.clientsChanged.next(this.clients);
  }

  getClientById(id: number): Client {
    for (const foundClient of this.clients) {
      if (foundClient.id === id) {
        return foundClient;
      }
    }
  }

  getClientIds() {
    const ids = this.clients.map(client => {
      return client.id;
    });
    return ids;
  }

  addClient(newClient: Client) {
    this.clients.push(newClient);
    this.clientsChanged.next(this.clients);
  }

  updateClient(id: number, newClient: Client) {
    this.clients.map((client, index) => {
      if (client.id === id) {
        this.clients.splice(index, 1, newClient);
        this.clientsChanged.next(this.clients);
      }
    });
  }

  deleteClient(id: number) {
    this.clients.map((client, index) => {
      if (client.id === id) {
        this.clients.splice(index, 1);
        this.clientsChanged.next(this.clients);
      }
    });
  }
}
