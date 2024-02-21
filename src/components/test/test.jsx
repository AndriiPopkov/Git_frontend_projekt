import React, { useEffect, useState } from 'react'
import s from './test.module.css'

const arr = [1, 5, 101, 25, 62, 18, 6, 47, 82]

function Test() {

    const [inputMinValue, setInputMinValue] = useState('');
    const [inputMaxValue, setInputMaxValue] = useState('');
    const [array, setArray] = useState(arr);

    const handleFilter = () => {
        const min = parseInt(inputMinValue);
        const max = parseInt(inputMaxValue);
        console.log(min, max);

        // if (!isNaN(min) && !isNaN(max)) {
            const filteredArray = arr.filter(el => el >= min && el <= max);
            setArray(filteredArray);
        // }
    };

    // useEffect(() => {
    //     const min = parseInt(inputMinValue);
    //     const max = parseInt(inputMaxValue);

    //     if (!isNaN(min) && !isNaN(max)) {
    //         const filteredArray = array.filter(el => el >= min && el <= max);
    //         setArray(filteredArray);
    //     }

    // }, [inputMaxValue, inputMinValue])

    return (
        <div>
            <div>
                <input type="text" value={inputMinValue} onChange={(e) => setInputMinValue(e.target.value)} placeholder="Минимальное значение" />
                <input type="text" value={inputMaxValue} onChange={(e) => setInputMaxValue(e.target.value)} placeholder="Максимальное значение" />
                <button onClick={handleFilter}>Фильтровать</button>
            </div>
            <div className={s.cont}>
                {array.map(el => (<p className={s.num}>{el}</p>
                ))}
            </div>
        </div>
    )
}

export default Test
