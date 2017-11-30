import { API_ADDRESS } from '../env'
import blobReader from  '../utils/blobReader'

export const Http = {
  handleErrors(response){
    if (!response.ok) { throw Error(response.statusText) }


    return response.blob().then(blobReader)
  },

  GET(path) {
    const myInit = {
      method: 'GET',
    };

    return (
        fetch(API_ADDRESS + path , myInit)
          .then(this.handleErrors)
      )
  },

  POST(path, body) {
     const myInit = {
       method: 'POST',
       body: JSON.stringify(body)
    };

    return (
      fetch(API_ADDRESS + path, myInit)
        .then(this.handleErrors)
    )
  },

  PUT(path, body) {
    const myInit = {
      method: 'PUT',
      body: JSON.stringify(body)
    };

    return (
      fetch(API_ADDRESS + path, myInit)
        .then(this.handleErrors)
    )
  },

  DELETE(path, body) {
    const myInit = {
      method: 'DELETE',
    };

    return (
      fetch(API_ADDRESS + path, myInit)
        .then(this.handleErrors)
    )
  }
}
