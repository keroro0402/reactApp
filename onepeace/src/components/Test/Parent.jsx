import { useState } from 'react';

const Test = () => {
  const [fruit, setFruit] = useState([
    {
      label: 'Apple',
      value: 200,
      checked: false,
    },
    {
      label: 'Orange',
      value: 100,
      checked: false,
    },
    {
      label: 'Peach',
      value: 400,
      checked: false,
    },
  ]);

  return <></>;
};

export default Test;
