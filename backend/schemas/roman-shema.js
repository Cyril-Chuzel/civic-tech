import { gql } from 'apollo-server';

const romanSchemas = gql`
    type Query {
        getDoleances: [Doleance]
        getDoleance(id: Int!): Doleance
    }

    type Doleance {
        id: Int!
        title: String!
        content: String!
        date: String
    }
`;

export default romanSchemas;