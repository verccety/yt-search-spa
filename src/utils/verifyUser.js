import USER_DB from './users_db.json'

const verifyUser = (login, password) => {
  return USER_DB.some(obj => obj.user === login && obj.password === password)
}

export default verifyUser;