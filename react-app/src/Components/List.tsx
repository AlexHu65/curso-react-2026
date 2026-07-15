import type { MouseEvent } from 'react';


type Props = {
  data: string[];
};


function List({ data }: Props) {

    const handleClick = (e: MouseEvent) => {
        alert(e.currentTarget.textContent);
    };

    return (
        <div>
        <ul className="list-group">
            {data.map((item, index) => (
            <li 
                onClick={handleClick}
                key={`${index}${item}`} 
                className="list-group-item">{item}
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
