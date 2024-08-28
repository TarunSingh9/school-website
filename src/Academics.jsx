import React from 'react';
import "./css/Academics.css";
import Curriculum from './component/Curriculum';
import CoreCurriculum from './component/CoreCurriculum';
import AcademicSchedule from './component/AcademicSchedule';

const Academics = () => {
  return (
    <div>
    <div className="academics-container">
      <h2 className="academics-heading">Academics Page</h2>
    </div>
     <Curriculum/>
     <CoreCurriculum/>
     <AcademicSchedule/>
    </div>
  );
}

export default Academics;
