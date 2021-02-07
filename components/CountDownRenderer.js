export const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return (
      <div className="flex items-center justify-center font-body">
        <p className="text-xl md:text-3xl font-medium">4 Desember 2021</p>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-between font-body">
        <div className="text-center">
          <p className="text-xl md:text-3xl font-medium">{days}</p>
          <p>Day(s)</p>
        </div>
        <div className="text-center">
          <p className="text-xl md:text-3xl font-medium">{hours}</p>
          <p>Hour(s)</p>
        </div>
        <div className="text-center">
          <p className="text-xl md:text-3xl font-medium">{minutes}</p>
          <p>Minute(s)</p>
        </div>
        <div className="text-center">
          <p className="text-xl md:text-3xl font-medium">{seconds}</p>
          <p>Second(s)</p>
        </div>
      </div>
    );
  }
};
