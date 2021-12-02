const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }
  
  type Product {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    category: Category
  }