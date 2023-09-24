import Header from '../components/header/index'
import styles from './page.module.css'
import Test from '../components/test'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Test />
    </main>
  )
}
