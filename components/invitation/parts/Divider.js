export const DoubleWave = ({ color, isBottom }) => {
  return (
    <div>
      <div
        className={`absolute overflow-hidden ${
          isBottom ? "-bottom-2 left-0 flip-vertical" : " -top-2 left-0"
        }  w-full`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={color}
            fill-opacity="1"
            d="M0,32L60,58.7C120,85,240,139,360,170.7C480,203,600,213,720,192C840,171,960,117,1080,112C1200,107,1320,149,1380,170.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div
        className={`absolute overflow-hidden ${
          isBottom ? "-bottom-1 left-0 flip-vertical" : " -top-1 left-0"
        }  w-full`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={color}
            fill-opacity="0.3"
            d="M0,128L60,144C120,160,240,192,360,181.3C480,171,600,117,720,85.3C840,53,960,43,1080,69.3C1200,96,1320,160,1380,192L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};
