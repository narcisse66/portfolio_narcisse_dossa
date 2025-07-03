import { useState } from "react";

const AvailableDiv = () => {
  const [isAvailable, setIsAvailable] = useState(true);
  return (
    <div>
      {isAvailable ? (
        <div className="bg-custom-green-95 flex w-full flex-shrink-0 items-center justify-center gap-3 rounded-md p-2">
          <div className="bg-custom-green-60 h-2 w-2 rounded-full"></div>

          <span className="text-custom-green-60 text-sm font-medium">
            Available to Work
          </span>
        </div>
      ) : (
        <div className="bg-custom-red-95 flex w-full items-center justify-center gap-3 rounded-md p-2">
          <div className="bg-custom-red-60 h-2 w-2 rounded-full"></div>

          <span className="text-custom-red-60 text-sm font-medium">
            Available to Work
          </span>
        </div>
      )}
    </div>
  );
};

export default AvailableDiv;
