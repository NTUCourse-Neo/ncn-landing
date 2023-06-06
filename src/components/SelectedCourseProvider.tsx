import { createContext, useContext, useEffect, useState } from "react";
import { Course } from "@/types/course";
import { useTranslation } from "react-i18next";
import mockCourses from "@/data/mockCourses";

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
  const { i18n } = useTranslation();

  useEffect(() => {
    const newCourses = selectedCourses.map((c) => {
      const newCourse = mockCourses[i18n.language === "zh" ? "zh" : "en"].find(
        (mc) => mc.id === c.id
      );
      return newCourse as Course;
    });
    setSelectedCourses(newCourses);
  }, [i18n.language, selectedCourses]);

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
