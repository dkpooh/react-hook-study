import React, {useCallback, useMemo, useRef, useState} from 'react';

const AverageMemo = () => {
  const [list, setList] = useState([])
  const [number, setNumber] = useState('')
  const inputEl = useRef(null)

  // const handleChange = (e) => {
  //   console.log(e.target.value)
  //   setNumber(e.target.value)
  // }

  const handleChange = useCallback(e => {
    console.log(e.target.value)
    setNumber(e.target.value)
  }, []) // 두번째 파라미터에 빈 배열을 넣게 될 경우 컴포넌트가 렌더링 될때 한번만 함수가 생성 됨

  // const handleInsert = () => {
  //   const nextList = list.concat(parseInt(number))
  //   console.log(nextList)
  //   setList(nextList)
  //   setNumber('')
  // }

  const handleInsert = useCallback(e => {
    const nextList = list.concat(parseInt(number))
    console.log(nextList)
    setList(nextList)
    setNumber('')
    inputEl.current.focus()
  }, [number, list]) // number or list가 바뀌었을 때만 함수 생성

  const getAverage = numbers => {
    // console.log('평균값 계산중..');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
  }

  // useMemo : 특정 값이 바뀌었을 때만 연산을 실행, 값이 바뀌지 않았으면 이전에 연산했던 결과를 다시 사용함
  const average = useMemo(() => getAverage(list), [list])

  return (
    <div>
      <input value={number} onChange={handleChange} ref={inputEl} />
      <button onClick={handleInsert}>등록</button>
      <ul>
        {list.map((val, idx) => (
          <li key={idx}>{val}</li>
        ))}
      </ul>
      <p><strong>평균 값 :</strong>{average}</p>
    </div>
  );
};

export default AverageMemo;