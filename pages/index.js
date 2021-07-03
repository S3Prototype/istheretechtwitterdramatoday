import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Is There Tech Twitter Drama Today?</title>
        <meta name="description" content="Is there tech twitter drama today? We know you're wondering. So here's the answer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Is there tech twitter drama today?
        </h1>

        <p className={styles.answer}>
          Yeah
        </p>

        <span className={styles.reason_title}>
          Reason
        </span>

        <p className={styles.reason}>
          {process.env.NEXT_PUBLIC_REASON}
        </p>

        <span className={styles.check_it_out_title}>
          Should I look into it?
        </span>

        <p className={styles.check_it_out}>
          {process.env.NEXT_PUBLIC_CHECK_IT_OUT}
        </p>

        <span className={styles.check_it_out_title}>
          Where can I find it?
        </span>

        <p style={{fontSize:'5rem'}}>
          {process.env.NEXT_PUBLIC_WHERE}          
        </p>
      </main>
    </div>
  )
}
