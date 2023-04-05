import styles from './Main.module.scss'

export const Main = () => {
  return (
      <main className={`main ${styles.main}`}>
        <section className={styles.section}>
          <div className={styles.container}>

            <div className={styles.title}>
              <h1 className={styles.h1}>Зарабатывайте больше</h1>
              <p className={styles.welbex}>с WELBEX</p>
              <p className={styles.us}>Развиваем и контролируем продажи за вас</p>
            </div>

            <div className={styles.consultation}>
              <h2 className={styles.h2}>Вместе с <span className={`${styles.free} ${styles.common}`}>бесплатной консультацией&nbsp;</span>мы
                дарим:</h2>

              <ul className={styles.gifts}>
                <li className={styles.gift}>
                  <div className={styles.wrapper}>
                    <span></span>
                    <h3 className={styles.subtitle}>Виджеты</h3>
                  </div>
                  <p className={styles.description}>30 готовых решений</p>
                </li>
                <li className={styles.gift}>
                  <div className={styles.wrapper}>
                    <span></span>
                    <h3 className={styles.subtitle}>Dashboard</h3>
                  </div>
                  <p className={styles.description}>с показателями
                    вашего бизнеса</p>
                </li>
                <li className={styles.gift}>
                  <div className={styles.wrapper}>
                    <span></span>
                    <h3 className={styles.subtitle}>Skype Аудит</h3>
                  </div>
                  <p className={styles.description}>отдела продаж и CRM системы</p>
                </li>
                <li className={styles.gift}>
                  <div className={styles.wrapper}>
                    <span></span>
                    <h3 className={styles.subtitle}>35 дней</h3>
                  </div>
                  <p className={styles.description}>использования CRM</p>
                </li>
              </ul>

              <button className={styles.button}>Получить консультацию</button>
            </div>

          </div>
        </section>
      </main>
  )
};