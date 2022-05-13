import { GraphQLID, GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList } from "graphql";
import Owner from "../models/owner";
import Vehicle from "../models/vehicle";

const VehicleType = new GraphQLObjectType({
  name: 'Vehicle',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    modelName: {
      type: GraphQLString
    },
    price: {
      type: GraphQLString
    },
    owner: {
      type: OwnerType,
      resolve(parent, args) {
        // return Owner.findById(parent.ownerId);
      }
    },
  }),
});

const OwnerType = new GraphQLObjectType({
  name: 'Owner',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    dob: {
      type: GraphQLString
    },
    vehicles: {
      type: new GraphQLList(VehicleType),
      resolve(parent, args) {
        // return Vehicle.find({ ownerId: parent.id });
      }
    },
  }),
});


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    employee: {
      type: VehicleType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // get data from db or any other source
      }
    },
    owner: {
      type: OwnerType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // get data from db or any other source
      }
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addOwner: {
      type: OwnerType,
      args: {
        name: { type: GraphQLString },
        dob: { type: GraphQLString },
      },
      resolve(parent, args) {
        let owner = new Owner({ name: args.name, dob: args.dob });
        return owner.save();
      }
    },
    addVehicle: {
      type: VehicleType,
      args: {
        modelName: { type: GraphQLString },
        price: { type: GraphQLString },
        ownerId: { type: GraphQLString },
      },
      resolve(parent, args) {
        let vehicle = new Vehicle({ modelName: args.modelName, price: args.price, ownerId: args.ownerId });
        return vehicle.save();
      }
    },
  }
});

const app = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

export default app;