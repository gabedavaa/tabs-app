import { useState } from "react";
import BtnContainer from "./BtnContainer";
import JobsInfo from "./JobsInfo";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setJobs(data);
      // console.log(data);
    } catch (error) {}
    setIsLoading(false);
  };

  useState(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobsInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
