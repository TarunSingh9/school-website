import React from 'react';
import HeaderSection from './About/HeaderSection';
import SchoolOverview from './About/SchoolOverview';
import AcademicExcellence from './About/AcademicExcellence';
import FacultyAndStaff from './About/FacultyAndStaff';
import CommunityAndCulture from './About/CommunityAndCulture';


const About = () => {
  return (
    <div>
      <HeaderSection />
      <SchoolOverview />
      <AcademicExcellence />
      <FacultyAndStaff />
      <CommunityAndCulture />
    </div>
  );
};

export default About;
