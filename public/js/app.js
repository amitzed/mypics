class App extends React.Component {
  render () {
    return (
      <div className='section'>
        <h1 className='title'> myMeme </h1>
        <div className='columns'>
        <Images />
        <Texts />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
