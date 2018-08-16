class ImagesList extends React.Component {
  render (){
    return (
      <table>
        <tbody>
        {this.props.images.map((image, index) => {
          return (
            <tr>
              <td onClick={()=> { this.props.getImage(image); this.props.toggleState('addImageIsVisible', 'imagesListIsVisible')}}>
                <img src={image.img} alt={image.text_id} />
              </td>
              <td className='image' onClick={()=> { this.props.getImage(image); this.props.toggleState('imagesListIsVisible', 'imageIsVisible')}}>
                <h3> {image.top_text} </h3>
              </td>
              <td>
                  <button className='button is-warning is-small is-rounded' onClick={() => {this.props.getImage(image); this.props.toggleState('imagesListIsVisible', 'addImageIsVisible')}}>Edit</button>
              </td>
              <td>
                  <button className='button is-danger is-small is-rounded' onClick={() => this.props.deleteImage(image, index)}>X</button>
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>
    )
  }
}
