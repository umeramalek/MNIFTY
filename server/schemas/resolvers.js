const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Order } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
      categories: async () => {
        return await Category.find();
      },
      products: async (parent, { category, name }) => {
        const params = {};
  
        if (category) {
          params.category = category;
        }
  
        if (name) {
          params.name = {
            $regex: name
          };
        }
        return await Product.find(params).populate('category');
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate('category');
    },