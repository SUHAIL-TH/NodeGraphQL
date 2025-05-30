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

    # this is for updating the user mutaion is for perfoming th updation thing
    type Mutation {
         createUser(name:String!,age:Int!):User!
         updateUser(id:ID,name:String,age:Int!):User!
    }
`

module.exports =typeDefs