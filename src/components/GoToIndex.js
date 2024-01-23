import React, { useState, useEffect } from "react";

const GoToIndex = () => {

    const [currentIndex, setCurrentIndex] = useState(
        JSON.parse(localStorage.getItem('currentIndex') || 0)
    );

    useEffect(() => {
        localStorage.setItem('currentIndex', JSON.stringify(currentIndex));
      }, [currentIndex]);

    return (
        <div className="">
            Start from question №
            <input
                className="goToInputStyle" 
                type="number" 
                value={currentIndex} 
                onChange={event => setCurrentIndex(parseInt(event.target.value))}
            ></input>
        </div>
      );
};

export default GoToIndex;