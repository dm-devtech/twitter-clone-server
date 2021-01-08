const { gql } = require("apollo-server-express")

const typeDefs = gql`
  # type(s)
  type Tweet {
    _id: String
    tweet: String
    authori: String
  }
  # Query(ies)
  type Query {
    getTweet(_id: String): Tweet
    getTweets: [Tweet]
  }
  # Mutation(s)
  type Mutation {
    createTweet(tweet: String, author: String): Tweet
    deleteTweet(_id: String): Tweet
    updateTweet(_id: String!, tweet: String!): Tweet
  }
`

// type defining the type of the tweet that will be used in every query and mutation

module.exports = typeDefs
