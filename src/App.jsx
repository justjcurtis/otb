import background from './assets/background.png'
import MainView from './views/mainView'

const styles = {
  container: {
    backgroundSize: 'contain',
    backgroundImage: `url(${background})`,
    width: '100vw',
    height: '100vh',
  }
}

function App() {
  return (
    <div style={styles.container}>
      <MainView />
    </div>
  )
}

export default App
