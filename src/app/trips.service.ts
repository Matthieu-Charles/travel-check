import { Injectable } from '@angular/core';

export interface Trip {
  id: string;
  value?: string,
  year: string,
  city: string;
  country: string;
  transport: 'avion' | 'bateau' | 'voiture' | 'vélo';
  articles: Object,
  DateofDeparture?: Date;
  DateofReturn?: Date;
  status?: 'present' | 'absent';
}

@Injectable({
  providedIn: 'root'
})

export class TripService {

  mockTrips: Trip[]=
  [
    { id:'1', value:'first', year: '2022', city: 'Bali', country: 'Indonésie', transport: 'vélo',
    articles: {
        Boxer : 
        {
          nombre: 2,
          couleur: 'bleu',
          marque: 'dim',
        },
        Passeport : 
        {
          nombre: 1,
          couleur: 'noir',
          marque: 'Sony',
        },
        pull : 
        {
          nombre: 3,
          couleur: 'jaune',
          marque: 'Eden Park'
        }
      }
    },
    { id:'2', value:'second', year: '2023', city: 'Moscou', country: 'Russie', transport: 'bateau',
    articles: {
        Boxer : 
        {
          nombre: 2,
          couleur: 'bleu',
          marque: 'dim',
        },
        Passeport : 
        {
          nombre: 1,
          couleur: 'noir',
          marque: 'Sony',
        },
        pull : 
        {
          nombre: 3,
          couleur: 'jaune',
          marque: 'Eden Park'
        }
      }
    },
    { id:'3', value:'third', year: '2024', city: 'Montpellier', country: 'France', transport: 'avion',
    articles: {
        Boxer : 
        {
          nombre: 2,
          couleur: 'bleu',
          marque: 'dim',
        },
        Passeport : 
        {
          nombre: 1,
          couleur: 'noir',
          marque: 'Sony',
        },
        pull : 
        {
          nombre: 3,
          couleur: 'jaune',
          marque: 'Eden Park'
        }
      }
    },
    { id:'4', value:'fourth', year: '2024', city: 'Fontenay-le-comte', country: 'France', transport: 'vélo',
    articles: {
        Boxer : 
        {
          nombre: 2,
          couleur: 'bleu',
          marque: 'dim',
        },
        Passeport : 
        {
          nombre: 1,
          couleur: 'noir',
        },
        Pull : 
        {
          nombre: 3,
          couleur: 'vert',
          marque: 'Eden Park'
        }
      }
    },
    { id:'5', value:'fifth', year: '2027', city: 'Brest', country: 'France', transport: 'bateau',
    articles: {
        Casquette : 
        {
          nombre: 2,
          couleur: 'bleu',
          marque: 'dim',
        },
        Passeport : 
        {
          nombre: 1,
          couleur: 'noir',
          marque: 'Sony',
        },
        Echarpe : 
        {
          nombre: 3,
          couleur: 'blanc',
          marque: 'Eden Park'
        },
        Dentifrice : 
        {
          nombre: 3,
          couleur: 'jaune',
          marque: 'Eden Park'
        },
        Short : 
        {
          nombre: 3,
          couleur: 'jaune',
          marque: 'Eden Park'
        }
      }
    },
  ]

  constructor(){}

  getAll(){
    return this.mockTrips;
  }

}
