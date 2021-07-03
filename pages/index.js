import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Is There Tech Twitter Drama Today?</title>
        <meta name="description" content="Is there tech twitter drama today? We know you're wondering. So here's the answer." />
        <meta property="og:image" content="https://www.pinclipart.com/picdir/big/82-822786_cartoon-angry-emoji-pictures-to-pin-on-pinterest.png" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="Twitter,Drama,Tech twitter" />
        <meta name="author" content="Shaquil Hansford" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Is there tech twitter drama today? We know you're wondering. So here's the answer."
        />
        <meta name="twitter:title" content="Is There Tech Twitter Drama Today?" />
        <meta name="twitter:site" content="@shaquilhansford" />
        <meta
          name="twitter:image"
          content="https://www.pinclipart.com/picdir/big/82-822786_cartoon-angry-emoji-pictures-to-pin-on-pinterest.png"
        />
        <meta name="twitter:creator" content="@shaquilhansford" />
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
