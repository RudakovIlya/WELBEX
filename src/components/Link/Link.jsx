import styles from './Link.module.scss'

export const Link = ({children}) => {
  return <a className={styles.link} href='/'>{children}</a>
};