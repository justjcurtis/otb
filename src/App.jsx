import background from './assets/background.png'
import SortBox from './components/sortbox'

const styles = {
  container: {
    backgroundSize: 'contain',
    backgroundImage: `url(${background})`,
    width: '100vw',
    height: '100svh',
  }
}

function App() {
  return (
    <div style={styles.container}>
      <SortBox />
    </div>
  )
}

export default App
