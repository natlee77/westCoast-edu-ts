  import { Course } from '../models/CourseType';
  import { ResponseModel } from '../models/ResponseModel.js';
  import { fetchData } from '../utilities/http.js';

export async function getCourse(id: number): Promise<Course> {
  const result = await fetchData('courses/' + id);
  return result as unknown as Course;
}
