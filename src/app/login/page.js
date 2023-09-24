import Header from '../../components/header/index'
import UserLogin from '../../components/auth/user/index'
import styles from '.././page.module.css'

export default function Login() {
  return (
    <main className={styles.main}>
      <Header />
      <UserLogin />
    </main>
  )
}
