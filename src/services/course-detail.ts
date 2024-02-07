  import { Course, Students } from '../models/CourseType';
   
  import { fetchData } from '../utilities/http.js';

export async function getCourse(id: number): Promise<Students> {
  const result = await fetchData('/courses/' + id);
  return result as unknown as Students;
}
