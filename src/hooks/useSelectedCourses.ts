import { proxy, useSnapshot } from "valtio";
import type { Course } from "@/types/course";

type SelectedCoursesState = {
  courses: Course[];
};

const selectedCoursesState = proxy<SelectedCoursesState>({
  courses: [],
});

const setSelectedCoursesData = (courses: Course[]) => {
  selectedCoursesState.courses = courses;
};

function useSelectedCourses() {
  const { courses } = useSnapshot(selectedCoursesState);

  return {
    selectedCourses: courses as Course[],
    setSelectedCourses: setSelectedCoursesData,
  };
}

export default useSelectedCourses;
