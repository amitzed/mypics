class Images extends React.Component {
  constructor (props){
  super(props)
  this.state = {
    imagesListIsVisible: true,
    addImageIsVisible: false,
    imageIsVisible: false,
    editImageIsVisible: false,
    images : [],
    image: {}
    }
    this.deleteImage = this.deleteImage.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
    this.getImage = this.getImage.bind(this)
    this.toggleState = this.toggleState.bind(this)
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
  }

  componentDidMount () {
    this.getImages();
  }

  deleteImage (image, index) {
    fetch('images/' + image.id,
      {
        method: 'DELETE'
      })
      .then(data => {
        this.setState({
          images: [
            ...this.state.images.slice(0, index),
            ...this.state.images.slice(index + 1)
          ]
        })
      })
  }

  handleCreate (image) {
    const updatedImages = this.state.images
    updatedImages.unshift(image)
    this.setState({images: updatedImages})
  }

  handleCreateSubmit (image) {
    fetch('/images', {
      body: JSON.stringify(image),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(createdImage => {
        return createdImage.json()
      })
      .then(jsonedImage => {
        this.handleCreate(jsonedImage)
        this.toggleState('addImageIsVisible', 'imagesListIsVisible')
      })
      .catch(error => console.log(error))
    }

    handleUpdateSubmit (image) {
    fetch('/images/'+ image.id, {
      body: JSON.stringify(image),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(updatedImage => {
        return updatedImage.json()
      })
      .then(jsonedImage => {
        //need to update state be naughty, call that db!
        this.getImages()
        this.toggleState('imagesListIsVisible', 'imageIsVisible')
      })
      .catch(error => console.log(error))

}

  getImage( image ) {
    this.setState({image: image})
  }

  getImages () {
    fetch('/images')
      .then(response => response.json())
      .then(data => {
        this.setState({
          images: data
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
      <div className='images column'>
        <h2> Images </h2>
        {this.state.imagesListIsVisible ? <button className='button is-success' onClick={()=>this.toggleState('addImageIsVisible', 'imagesListIsVisible')}>Add an Image</button> :''}
        {
          this.state.imagesListIsVisible ?
            <ImagesList
             toggleState={this.toggleState}
             images={this.state.images}
             getImage={this.getImage}
             deleteImage={this.deleteImage}
            /> : ''
        }
        {
          this.state.addImageIsVisible ?
           <ImageForm
            toggleState={this.toggleState}
            handleCreate={this.handleCreate}
            handleSubmit={this.handleCreateSubmit}
           /> : ''
         }
        {
          this.state.imageIsVisible ?
           <Image
            toggleState={this.toggleState}
            image={this.state.image}
            handleSubmit={this.handleUpdateSubmit}
           /> : ''
        }
      </div>
    )
  }
}
