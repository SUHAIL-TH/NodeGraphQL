const  {gql}=require("apollo-server-express")

const typeDefs=gql`
 
    type Query  {
        getAllUsers:[User!]!
    }
    type User {
        name:String,
        id:ID,
        age:Int
    }

    type Mutation {
         createUser(name:String!,age:Int!):User!
    }
`

module.exports =typeDefs