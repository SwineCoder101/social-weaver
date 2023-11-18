import styles from './Header.module.css'; // Adjust the path to your CSS module


export const Title = ({ text }) => {
    return (
        <div className={styles.headerTitleContainer}>
            <h1 className={styles.headerTitle}>{text}</h1>
        </div>
    );      
}