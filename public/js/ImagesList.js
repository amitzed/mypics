class ImagesList extends React.Component {
  render (){
    return (
      <table>
        <tbody>
        {this.props.images.map((image, index) => {
          return (
            <tr>
              <td onClick={()=> { this.props.getImage(image); this.props.toggleState('imagesListIsVisible', 'imageIsVisible')}}>
                <img src={image.img} alt={image.text_id} />
              </td>
              <td className='image' onClick={()=> { this.props.getImage(image); this.props.toggleState('imagesListIsVisible', 'imageIsVisible')}}>
                <h3> {image.top_text} </h3>
              </td>
              <td>
                  <button className='button is-warning is-small'>Edit</button>
              </td>
              <td>
                  <button className='button is-danger is-small' onClick={() => this.props.deleteImage(image, index)}>Delete</button>
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>
    )
  }
}
