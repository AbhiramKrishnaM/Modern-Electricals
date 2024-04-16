import axios from 'axios'

function getBaseUrl() {
  return 'https://api.modernelectricals.org'
}

function getUrl(path: string) {
  return getBaseUrl() + path
}

export async function getProducts() {
  const response = await axios.get(getUrl('/products'))
  if (response.status === 200) {
    return response.data
  }
  throw new Error(`Cannot fetch products, (${response.data})`)
}

export async function sendContactMessage(data: Record<string, any>) {
  const response = await axios.post(getUrl('/contact-forms'), data)
  if (response.status === 200) {
    return response.data
  }
  throw new Error(`Cannot send message, (${response.data})`)
}

export async function sendQuoteRequest(data: Record<string, any>) {
  const response = await axios.post(getUrl('/quote-requests'), data)
  if (response.status === 200) {
    return response.data
  }
  throw new Error(`Cannot send request, (${response.data})`)
}

export async function sendNewsletterRequest(data: Record<string, any>) {
  const response = await axios.post(getUrl('/newletter-requests'), data)
  if (response.status === 200) {
    return response.data
  }
  throw new Error(`Cannot send request, (${response.data})`)
}
