import { UserContext } from "./UserContext"

const user={
    id: 123,
    name: 'Arostegui Maranto',
    email: 'aros@email.com'
}




export const UserProvider = ({ children }) => {
  return (
   <UserContext.Provider value={{hola:'Mundo', user}}>
   {children}
   </UserContext.Provider>
  )
}
