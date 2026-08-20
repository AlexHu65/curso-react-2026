import { useState } from 'react';

type Props = {
  data: string[];
  onSelect?: (item: string) => void;
};


function List({ data, onSelect }: Props) {

    const [index, setIndex] = useState(1);
    
    const handleClick = (i: number, element: string) => {
        setIndex(i);
        // Puede o no estar la funcion definida
        onSelect?.(element);
    };

    return (
        <div>
        <ul className="list-group">
            {data.map((item, i) => (
            <li 
                onClick={() => handleClick(i, item)}
                key={`${i}${item}`}
                style={{ cursor: 'pointer' }}
                className={`list-group-item ${index == i ? 'active' : ''}`}>{item}
            </li>
            ))}
        </ul>
        </div>
    );
}

// function handleClick(item: string) {
//   alert(item);
// }

export default List;
