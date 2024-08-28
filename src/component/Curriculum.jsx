import React from 'react';
import './Curriculum.css';
//import curriculumImage from './path_to_your_image.jpg'; // Replace with your image path

const Curriculum = () => {
  return (
    <div className="curriculum-container">
      <h3 className="curriculum-heading">Curriculum</h3>
      <div className="curriculum-card">
        <div className="curriculum-image">
          <img src="https://img.freepik.com/free-photo/girl-student-hand-hug-book_1150-4131.jpg?ga=GA1.1.737256715.1724654428&semt=ais_hybrid" alt="Curriculum" />
        </div>
        <div className="curriculum-description">
          <p>
            <strong>R.B. Modern Public School</strong>, located in the serene Kadam Vihar Colony Township of Mathura, Uttar Pradesh, is a beacon of academic excellence and holistic education.Established with the vision of nurturing young minds, the school offers a dynamic and inclusive environment that encourages creativity, critical thinking, and personal growth. With a team of dedicated educators, we focus on fostering a love for learning while ensuring each student achieves their full potential. Our state-of-the-art facilities and modern teaching methods ensure that students are well-equipped to face the challenges of the future. At <strong>R.B. Modern Public School</strong>, we believe in the importance of character building, leadership skills, and community involvement, preparing our students to be responsible citizens.<br></br> The curriculum is designed to balance academics with extracurricular activities, promoting a well-rounded development. Through various cultural, sports, and social initiatives, students are given ample opportunities to showcase their talents and build confidence. <strong>R.B. Modern Public School</strong> is not just an institution but a nurturing ground where the leaders of tomorrow are shaped with values, knowledge, and the courage to dream big.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
