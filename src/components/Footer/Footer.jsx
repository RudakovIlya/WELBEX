import styles from './Footer.module.scss'
import tg from "@/assets/icons/telegram.svg";
import wu from "@/assets/icons/whatsapp.svg";
import vb from "@/assets/icons/viber.svg";
import {Link} from "@/components/Link/Link.jsx";

export const Footer = () => {
  return (
      <footer className={styles.footer}>
        <div className={`${styles.container}`}>
          <div>
            <h3 className={styles.subtitle}>О компании</h3>
            <ul>
              <li className={styles.item}>
                <Link>Партнёрская программа</Link>
              </li>
              <li className={styles.item}>
                <Link>Вакансии</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={styles.subtitle}>Меню</h3>
            <div className={styles.menu}>
              <ul>
                <li className={styles.item}>
                  <Link>Расчёт стоимости</Link>
                </li>
                <li className={styles.item}>
                  <Link>Услуги</Link>
                </li>
                <li className={styles.item}>
                  <Link>Виджеты</Link>
                </li>
                <li className={styles.item}>
                  <Link>Интеграции</Link>
                </li>
                <li className={styles.item}>
                  <Link>Наши клиенты</Link>
                </li>
              </ul>
              <ul>
                <li className={styles.item}>
                  <Link href="/">Кейсы</Link>
                </li>
                <li className={styles.item}>
                  <Link href="/">Благодарственные письма</Link>
                </li>
                <li className={styles.item}>
                  <Link href="/">Сертификаты</Link>
                </li>
                <li className={styles.item}>
                  <Link href="/">Блог на Youtube</Link>
                </li>
                <li className={styles.item}>
                  <Link href="/">Вопрос / Ответ</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.contacts}>
            <h3 className={styles.subtitle}>Контакты</h3>
            <p><a className={styles.link} href="tel:+75555555555">+7 555 555-55-55</a></p>
            <ul className={styles.networks}>
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
            <p className={styles.address}>Москва, Путевой проезд 3с1, к 902</p>
            <p className={styles.copy}>&copy;WELBEX 2022. Все права защищены.</p>
            <a className={styles.politic} href="/">Политика конфиденциальности</a>
          </div>
        </div>
      </footer>
  )
};