import styles from './Header.module.scss'
import logo from '@/assets/icons/logo_welbex.svg'
import tg from '@/assets/icons/telegram.svg'
import vb from '@/assets/icons/viber.svg'
import wu from '@/assets/icons/whatsapp.svg'
import {Link} from "@/components/Link/Link.jsx";

export const Header = () => {
  return (
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src={logo} alt="weblex logo"/>
            <p>крупный интегратор CRM в России и ещё 8 странах</p>
          </div>
          <ul className={styles.list}>
            <li><Link>Услуги</Link></li>
            <li><Link>Виджеты</Link></li>
            <li><Link>Интеграции</Link></li>
            <li><Link>Кейсы</Link></li>
            <li><Link>Сертификаты</Link></li>
          </ul>
          <a className={styles.link} href="tel:+75555555555">+7 555 555-55-55</a>
          <ul className={styles.contacts}>
            <li><a className={styles.link} href="tel:+75555555555">
              <img src={tg} alt="telegram"/>
            </a></li>
            <li><a className={styles.link} href="tel:+75555555555">
              <img src={wu} alt="whatsup"/>
            </a></li>
            <li><a className={styles.link} href="tel:+75555555555">
              <img src={vb} alt="viber"/>
            </a></li>
          </ul>
        </div>
      </header>
  )
};