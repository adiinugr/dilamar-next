export const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return (
      <div className="flex items-center justify-center font-body">
        <p className="text-xl md:text-3xl font-medium">4 Desember 2021</p>
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-4 gap-4 items-center justify-between font-body">
        <div className="text-center rounded-lg border p-2 border-gray-100">
          <p className="text-lg md:text-3xl font-medium">{days}</p>
          <p>Day(s)</p>
        </div>
        <div className="text-center rounded-lg border p-2 border-gray-100">
          <p className="text-lg md:text-3xl font-medium">{hours}</p>
          <p>Hour(s)</p>
        </div>
        <div className="text-center rounded-lg border p-2 border-gray-100">
          <p className="text-lg md:text-3xl font-medium">{minutes}</p>
          <p>Min(s)</p>
        </div>
        <div className="text-center rounded-lg border p-2 border-gray-100">
          <p className="text-lg md:text-3xl font-medium">{seconds}</p>
          <p>Sec(s)</p>
        </div>
      </div>
    );
  }
};

export const rendererTwo = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return (
      <div className="flex items-center justify-center font-body">
        <p className="text-xl md:text-3xl font-medium">4 Desember 2021</p>
      </div>
    );
  } else {
    return (
      <div className="flex justify-between font-body">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-kharnisa-imam-gold text-gray-50 w-10 md:w-16 h-12 mb-2 flex justify-center items-center rounded-md text-lg md:text-3xl font-medium">
            <div>{days}</div>
          </div>
          <div>Day(s)</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-kharnisa-imam-gold text-gray-50 w-10 md:w-16 h-12 mb-2 flex justify-center items-center rounded-md text-lg md:text-3xl font-medium">
            <div>{hours}</div>
          </div>
          <div>Hour(s)</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-kharnisa-imam-gold text-gray-50 w-10 md:w-16 h-12 mb-2 flex justify-center items-center rounded-md text-lg md:text-3xl font-medium">
            <div>{minutes}</div>
          </div>
          <div>Minute(s)</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-kharnisa-imam-gold text-gray-50 w-10 md:w-16 h-12 mb-2 flex justify-center items-center rounded-md text-lg md:text-3xl font-medium">
            <div>{seconds}</div>
          </div>
          <div>Second(s)</div>
        </div>
      </div>
    );
  }
};
