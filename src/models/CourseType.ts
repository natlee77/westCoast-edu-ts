import {User} from "./UserType";

export interface Course {
  
  id: number;
  title: string;
  imageUrl: string;
  type: string;
  number: string;
  days: number;
  price: number;
  rating: number;
  description: string;
  start: string;
}

export interface Students extends Course {
  students: [User ];
}







