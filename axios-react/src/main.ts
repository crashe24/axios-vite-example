import axios from 'axios';

let users = []

export interface User {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Geo {
  lat: string
  lng: string
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}


const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

const initApp = async () => {
  const res = await axiosInstance.get<User>('users')
  console.log('res', res)
  users = res.data

  const ul = document.querySelector('ul') as HTMLUListElement

  users.forEach((usr:User) => {
    const li = document.createElement('li')
    li.textContent = usr.name
    ul?.appendChild(li)
    
  });
}

const botonRef = document.querySelector('button')
botonRef?.addEventListener('click', ()=> {
  initApp()
}) 
