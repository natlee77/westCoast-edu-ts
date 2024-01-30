import {   CourseType } from './CourseType';
import { UserType } from './UserType';

export interface ResponseModel {
  courses: [CourseType ];
  users: [UserType];

}
