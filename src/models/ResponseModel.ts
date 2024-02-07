import {   Course  } from './CourseType';
import { User  } from './UserType';

export interface ResponseModel {
  courses: [Course  ];
  users: [User ];

}
