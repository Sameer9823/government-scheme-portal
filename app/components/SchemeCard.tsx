// components/SchemeCard.tsx
import React from 'react';

interface SchemeCardProps {
  image: string;
  schemeName: string;
  description: string;
  applyLink: string;
}

const SchemeCard: React.FC<SchemeCardProps> = ({ image, schemeName, description, applyLink }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl m-4">
      <figure>
        <img src={image} alt={schemeName} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{schemeName}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <a
            href={applyLink}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default SchemeCard;
