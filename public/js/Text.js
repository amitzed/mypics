class Text extends React.Component {

  render () {
    return (
      <div>
        <div className='tile is-ancestor'>
          <div className='tile is-2'>
            <div>
              <h3> {this.props.text.top_text} </h3>
            </div>
          </div>
          <div className='tile is-2'></div>
          <div className='tile'>
            <div>
              <h3 className='tile is-child box'><span>Text Name:</span>
              {this.props.text.top_text} </h3>
              <p className='tile is-child box'><span>Industry:</span>
              {this.props.text.bottom_text} </p>

          </div>
          <div className='tile'>
          </div>
          <div className='tile'>
            <button className='button is-warning' onClick={()=>
            this.props.toggleState('textsListIsVisible', 'textIsVisible')}>See Full List</button>
          </div>
        </div>
      </div>
      <TextForm />
    </div>
    )
  }
}
