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

export interface CourseUser extends Course {
  usersBok: [
    {
      id: number;
      firstName: string;
      lastName: string;
      telephone: string;
      street: string;
      postIndex: number;
      city: string;
      email: string;
      start: string;

    }
  ];
}







