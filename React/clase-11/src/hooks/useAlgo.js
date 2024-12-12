import { useState } from "react";

export const useAlgo = (algo) => {
  const [state, setState] = useState(algo);


  return { state };
};
