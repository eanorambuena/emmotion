import Editable from '../components/Editable'
import styles from './page.module.css'

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1>emmotion</h1>
        <p>
          <code>Hi()</code> Write your own story.
        </p>
      </div>
      <div className={styles.editableContent}>
        {
          [0, 1, 3].map((i) => (
            <Editable placeholder={'Type ...'} key={i}/>
          ))
        }
      </div>
    </main>
  )
}

export default Home;