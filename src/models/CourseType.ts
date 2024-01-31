export interface CourseType {
  id: number;
  title: string;
  imageUrl: string;
  type: string;
  number:string;
  days: number;
  price: number;
  rating: number;
  description: string;
  users : [
    {
      id: number;
      firstName : string;
      lastName : string;
      telephone : string;
      street : string;
      postIndex : number;
      city: string;
      email: string;
      start:string;
    }
  ];
}
 
export interface Course extends CourseType{
   
  title: string;
  imageUrl: string;
  type: string;
  number:string;
  days: number;
  price: number;
  start: string;
  
}
 
 
 
 
 
 
 
