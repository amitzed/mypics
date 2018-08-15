class Image extends React.Component {

  render () {
    return (
      <div>
        <div className='tile is-ancestor'>
          <div className='tile is-2'>
            <div>
              <img src={this.props.image.img} alt={this.props.image.text_id} />
            </div>
          </div>
          <div className='tile is-2'></div>
          <div className='tile'>
            <div>
              <h3 className='tile is-child box'><span>Top Text:</span> {this.props.image.text_id} </h3>

            </div>
            <div className='tile'>
            </div>
          <div className='tile'>
            <button className='button is-warning' onClick={()=> this.props.toggleState('imagesListIsVisible', 'imageIsVisible')}>See Full List</button>
          </div>
          </div>
          </div>
          <PersonForm image={this.props.image}   handleSubmit={this.props.handleSubmit}/>
        </div>
      )
  }
}
