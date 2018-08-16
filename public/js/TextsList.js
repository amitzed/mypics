class TextsList extends React.Component {
  render() {
    return (
      <table>
        <tbody>
        {this.props.texts.map((text, index) => {
          return (
            <tr>
              <td onClick={()=> { this.props.getText(text);
              this.props.toggleState('addTextIsVisible', 'textsListIsVisible')}}>
                <h3> {text.top_text} </h3>
              </td>
              <td className='text' onClick={()=> {
                this.props.getText(text);
                this.props.toggleState('textsListIsVisible', 'textIsVisible')}}>
                  <h3> {text.bottom_text} </h3>
              </td>
              <td>
                <button className='button is-warning is-small is-rounded'  onClick={()=>
                  { this.props.getText(text); this.props.toggleState('textsListIsVisible', 'addTextIsVisible')}}>Edit</button>
              </td>
              <td>
                <button className='button is-danger is-small is-rounded' onClick={() =>
                this.props.deleteText(text, index)}>X</button>
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>
    )
  }
}
