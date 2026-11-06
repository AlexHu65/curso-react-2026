import { ReactNode } from "react";
import styles from './Alert.module.css';

export type AlertProps = {
    status: boolean;
    onClick?: () => void;
    children: ReactNode;
};

const Alert = ({ status, onClick, children }: AlertProps) => {
    return (
        <button className={`${styles.alert} ${status ? styles.success : styles.error} btn btn-primary`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Alert;