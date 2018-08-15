class TextForm extends React.Component {
  render () {
    return (
      <div className='field'>
        <form>
          <label className='label' for='top_text'>Top Text</label>
          <div className='control'>
            <input className='input' type='text' id='top_text' />
          </div>

          <label className='label' for='bottom_text'>Bottom Text</label>
          <div className='control'>
            <input className='input' type='text' id='bottom_text' />
          </div>

          <div className='control'>
            <input className='button is-primary' type='submit' />
          </div>
        </form>
          <button className="button is-link" onClick={()=>
          this.props.toggleState('textsListIsVisible',
          'addTextIsVisible')}>Cancel</button>
      </div>
    )
  }
}
