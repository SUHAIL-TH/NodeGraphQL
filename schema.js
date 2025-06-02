const  {gql}=require("apollo-server-express")
// this is used to declear the type definiton for graphal
const typeDefs=gql`
 
    type Query  {
        getAllUsers:[User!]!
    }
    type User {
        name:String,
        id:ID,
        age:Int
    }

    # this is for updating the user mutaion is for perfoming th updation thing
    type Mutation {
         createUser(name:String!,age:Int!):User! #create user functionlity
         updateUser(id:ID,name:String,age:Int!):User! #update schema functionality
         deleteUser(id:ID!):User! #this is for delete user schema functionality
    }
`

module.exports =typeDefs
