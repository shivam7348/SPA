import React from "react";

function ProductBanner() {
  // Contact function that returns contact data
  function Contact({ img  }) {
    return (
      <section>
        <div className="transition-transform duration-300 transform hover:scale-105 hover:shadow-lg ml-32">
           
          <img
            src={img}
            alt="Product"
            className=" w-full  h-auto  hover:scale-125"
             // Ensures the images fit within the container
          />
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Display Contact Information with a 2-column grid */}
      <div className="grid grid-cols-4">
        <Contact img="https://firstouchkiosk.com/wp-content/uploads/2023/06/commercial-display-1.jpg" />
        <Contact img="https://firstouchkiosk.com/wp-content/uploads/2023/09/75-touch-standee-new.jpg" />
        <Contact img="https://firstouchkiosk.com/wp-content/uploads/2023/06/interactive-flat-panel-display-homepage.jpg" />
        
        <Contact img="https://firstouchkiosk.com/wp-content/uploads/2023/09/FRAME-VIDEO-WALL.jpg" />
        <Contact img="https://firstouchkiosk.com/wp-content/uploads/2023/09/FRAME-VIDEO-WALL.jpg" />
       
        <Contact img="https://firstouchkiosk.com/wp-content/uploads/2023/06/video-conferencing-solutions-india.jpg" />
        <Contact img="https://firstouchkiosk.com/wp-content/uploads/2023/06/video-conferencing-solutions-india.jpg" />
        <Contact img="https://firstouchkiosk.com/wp-content/uploads/2023/06/video-conferencing-solutions-india.jpg" />
      </div>
    </>
  );
}

export default ProductBanner;
