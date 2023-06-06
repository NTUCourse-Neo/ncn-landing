import { createContext, useContext, useState } from "react";
import { Course } from "@/types/course";

interface SelectedCourseContext {
  selectedCourses: Course[];
  setSelectedCourses: (courses: Course[]) => void;
}

const SelectedCourseContext = createContext<SelectedCourseContext>({
  selectedCourses: [],
  setSelectedCourses: () => {},
});

const SelectedCourseProvider: React.FC<{
  readonly children: React.ReactNode;
}> = ({ children }) => {
  const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);

  console.log(selectedCourses);

  return (
    <SelectedCourseContext.Provider
      value={{ selectedCourses, setSelectedCourses }}
    >
      {children}
    </SelectedCourseContext.Provider>
  );
};

export default SelectedCourseProvider;

export const useSelectedCourses = () => useContext(SelectedCourseContext);
