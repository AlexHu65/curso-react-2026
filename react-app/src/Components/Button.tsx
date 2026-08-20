import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    isLoading?: boolean;
    onClick?: () => void;
};

const Button = ({ children, isLoading, onClick }: Props) => {

    return (
        <button 
            disabled={isLoading} 
            type="button" 
            onClick={onClick} 
            className={`btn btn-${isLoading ? 'secondary' : 'primary'}`}>{isLoading ? 'Cargando...' : children}
        </button>
    );
};

export default Button;