  import { Course, CourseUser } from '../models/CourseType';
   
  import { fetchData } from '../utilities/http.js';

export async function getCourse(id: number): Promise<CourseUser> {
  const result = await fetchData('/courses/' + id);
  return result as unknown as CourseUser;
}
