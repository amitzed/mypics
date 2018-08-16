class TextForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      top_text: '',
      bottom_text: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount(){
    if(this.props.text){
      this.setState({
        top_text: this.props.text.top_text,
        bottom_text: this.props.text.bottom_text,
        id: this.props.text.id
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

          <label className='label' for='top_text'>Top Text</label>
          <div className='control'>
            <input
            className='input'
            type='text'
            id='top_text'
            onChange={this.handleChange}
            value={this.state.top_text}
            />
          </div>

          <label className='label' for='bottom_text'>Bottom Text</label>
          <div className='control'>
            <input
            className='input'
            type='text'
            id='bottom_text'
            onChange={this.handleChange}
            value={this.state.bottom_text} />
          </div>

          <div className='control'>
            <input className='button is-primary' type='submit' />
          </div>

        </form>
          <button className="button is-link" onClick={()=> this.props.toggleState('textsListIsVisible',
          'addTextIsVisible')}>Cancel</button>
      </div>
    )
  }
}
