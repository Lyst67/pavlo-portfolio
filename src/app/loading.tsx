'use client';

import { ThreeCircles } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="flex justify-center w-full absolute top-1/3">
      <div className="flex justify-center w-full">
        <ThreeCircles
          visible={true}
          height="150"
          width="150"
          color="#4d06d0b2"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
};
export default Loading;
