import tsvToJSON from "../helper/toJson.js";

const romanResolvers = {
    Query: {
        getDoleances: () => {
            const data = tsvToJSON("CahierDoleances.tsv");
            return data;
        },
        getDoleance: (parent, args, context, info) => {
            const data = tsvToJSON("CahierDoleances.tsv");
            return data[args.id];
        },
    },
};

export default romanResolvers