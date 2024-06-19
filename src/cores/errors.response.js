export function handleErrorResponse(response) {
  if (!response.ok) {
    switch (response.status) {
      case 400:
        console.error('Error 400: Bad Request')
        break
      case 401:
        console.error('Error 401: Unauthorized')
        break
      case 403:
        console.error('Error 403: Forbidden')
        break
      case 404:
        console.error('Error 404: Not Found')
        break
      case 500:
        console.error('Error 500: Internal Server Error')
        break
      default:
        console.error('Unknown Error:', response.status, response.statusText)
    }
    throw new Error(`${response.status} ${response.statusText}`)
  }
  return response
}
