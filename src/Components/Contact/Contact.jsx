import styles from './Contact.module.scss';


const Contact = () => {
  return (
    <div className={styles.contact_container}>
      <div className={styles.left}>
        <h2>Lets Talk About it</h2>
        <p>Lets build something great together.</p>
      </div>
      <div className={styles.right}>
        <form action="">
          <div className={styles.name_email}>
            <input type="text" placeholder='NAME' required />
            <input type="email" placeholder='EMAIL' required />
          </div>
          <div className={styles.number_company}>
            <input type="text" placeholder='CONTACT NO' />
            <input type="email" placeholder='COMPANY NAME' />
          </div>
          <div className={styles.description}>
            <input type="email" placeholder='DESRIBE YOUR NEED' required />
          </div>
          <div className={styles.submit}>
            <button>SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact