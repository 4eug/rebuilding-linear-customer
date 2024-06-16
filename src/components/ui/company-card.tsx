import React from 'react';
import classNames from 'classnames';

export const CompanyCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={classNames("relative flex flex-col items-center justify-center p-6 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg border border-white border-opacity-30 shadow-lg transition-transform transform hover:scale-105", className)}>
      <div className="mb-4">{children}</div>
      <div className="opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
        <span className="text-white text-lg font-semibold">Read more</span>
      </div>
    </div>
  );
};
