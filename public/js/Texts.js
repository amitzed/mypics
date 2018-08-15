class Texts extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      textsListIsVisible: true,
      addTextIsVisible: false,
      textIsVisible: false,
      editTextIsVisible: false,
      texts : []
    }
    this.deleteText = this.deleteText.bind(this)
    this.getText = this.getText.bind(this)
    this.toggleState = this.toggleState.bind(this)

  }

  componentDidMount () {
    this.getTexts();
  }

  deleteText (text, index) {
    fetch('texts/' + text.id,
    {
      method: 'DELETE'
    })
    .then(data => {
      this.setState({
        texts: [
          ...this.state.texts.slice(0, index),
          ...this.state.texts.slice(index + 1)
        ]
      })
    })
  }

  getText( text ) {
    this.setState({text: text})
  }

  getTexts () {
    fetch('/texts')
      .then(response => response.json())
      .then(data => {
        this.setState({
          texts: data
        })
      }).catch(error => console.log(error))
  }

  toggleState (st1, st2) {
    this.setState({
      [st1]: !this.state[st1],
      [st2]: !this.state[st2]
    })
  }


  render () {
    return (
      <div className='texts column'>
        <h2> Texts </h2>
        {this.state.textsListIsVisible ?  <button className='button is-success'
        onClick={()=>this.toggleState('addTextIsVisible',
        'textsListIsVisible')}>Add Some Text</button> :''}
        {
          this.state.textsListIsVisible ?
            <TextsList
             toggleState={this.toggleState}
             texts={this.state.texts}
             getText={this.getText}
             deleteText={this.deleteText}
             /> : ''
        }
        {
          this.state.addTextIsVisible ?
            <TextForm
             toggleState={this.toggleState}
            /> : ''
        }
        {
          this.state.textIsVisible ?
          <Text
           toggleState={this.toggleState}
           text={this.state.text}
           /> : ''
        }
      </div>
    )
  }
}
