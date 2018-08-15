class ImageForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      img: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount(){
    if(this.props.image){
      this.setState({
        img: this.props.image.img,
        id: this.props.image.id
      })
    }
  }

  handleChange (event) {
    this.setState({[event.target.id]: event.target.value})

  }
  handleSubmit (event) {
    event.preventDefault()
    this.props.handleSubmit(this.state)
  }
  render () {
    return (
      <div className='field'>
        <form onSubmit={this.handleSubmit}>

          <label className='label 'for='img'>Image</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              id='img'
              onChange={this.handleChange}
              value={this.state.img}
            />
          </div>

          <div className='control'>
            <input className='button is-primary' type='submit' />
          </div>

        </form>
          <button className="button is-link" onClick={()=> this.props.toggleState('imagesListIsVisible', 'addImageIsVisible')}>Cancel</button>
      </div>
    )
  }
}
