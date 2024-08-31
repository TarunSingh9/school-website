import React, { useState } from 'react';
import { FaThumbsUp, FaArrowRight } from 'react-icons/fa';
import "./AlumniReview.css";


const AlumniReview = () => {
  const [reviews, setReviews] = useState([
    { name: 'John Doe', year: '2020', message: 'Great school with excellent teachers!', likes: 0 },
    { name: 'Jane Smith', year: '2019', message: 'The best years of my life!', likes: 0 },
    { name: 'Mike Johnson', year: '2021', message: 'Amazing experience, highly recommend.', likes: 0 },
    // Add more initial reviews as needed
  ]);
  
  const [newReview, setNewReview] = useState({ name: '', year: '', message: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 9;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleAddReview = () => {
    if (newReview.name && newReview.year && newReview.message) {
      setReviews([...reviews, { ...newReview, likes: 0 }]);
      setNewReview({ name: '', year: '', message: '' });
    }
  };

  const handleLike = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews[index].likes += 1;
    setReviews(updatedReviews);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(reviews.length / reviewsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  return (
    <div className="alumni-review">
      <h1>Alumni Reviews</h1>
      <div className="review-grid">
        {currentReviews.map((review, index) => (
          <div key={index} className="review-card">
            <h3>{review.name} - {review.year}</h3>
            <p>{review.message}</p>
            <button onClick={() => handleLike(indexOfFirstReview + index)}>
              <FaThumbsUp /> {review.likes}
            </button>
          </div>
        ))}
      </div>
      
      <div className="add-review">
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          value={newReview.name} 
          onChange={handleInputChange} 
        />
        <input 
          type="text" 
          name="year" 
          placeholder="Year of Passout" 
          value={newReview.year} 
          onChange={handleInputChange} 
        />
        <input 
          type="text" 
          name="message" 
          placeholder="Review Message" 
          value={newReview.message} 
          onChange={handleInputChange} 
        />
        <button onClick={handleAddReview}>Add Review</button>
      </div>
      
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
        <button onClick={handleNextPage} disabled={currentPage >= Math.ceil(reviews.length / reviewsPerPage)}>
          Next <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default AlumniReview;
