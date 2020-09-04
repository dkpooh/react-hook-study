import React, {useState} from 'react';

const Average = () => {
  const [list, setList] = useState([])
  const [number, setNumber] = useState('')

  const handleChange = (e) => {
    setNumber(e.target.value)
  }

  const handleInsert = () => {
    const nextList = list.concat(parseInt(number))
    console.log(nextList)
    setList(nextList)
    setNumber('')
  }

  const getAverage = numbers => {
    console.log('평균값 계산중..');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
  }

  return (
    <div>
      <input value={number} onChange={handleChange} />
      <button onClick={handleInsert}>등록</button>
      <ul>
        {list.map((val, idx) => (
          <li key={idx}>{val}</li>
        ))}
      </ul>
      <p><strong>평균 값 :</strong>{getAverage(list)}</p>
    </div>
  );
};

export default Average;