import { ReactNode } from "react";
import styles from './SentButton.module.css';
import { IoIosSend } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

export type SentButtonProps = {
    onClick?: () => void;
    status: boolean;
    children: ReactNode;
};

const SentButton = ({ onClick, children, status }: SentButtonProps) => {
    return (
        <button className={`${styles.sentButton} ${status ? styles.success : styles.error} btn btn-primary`} onClick={onClick}>
            {status ? children : 'Enviado'}
            {status && <IoIosSend />}
            {!status && <FaCheck />}
        </button>
    );
};

export default SentButton;