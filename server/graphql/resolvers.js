import models from '../models/index.js';

const Resolvers = {
  Query: {
    user(_, args, context, info) {
      return models.user.findOne({
        where: args.id,
      });
    },
    users(_, args, context, info) {
      const attributes = [];
      const { selections } = info.fieldNodes[0].selectionSet;
      selections.map((attr) => {
        const { value } = attr['name'];
        attributes.push(value);
      });
      console.log('attributes: ', attributes)
      return models.user.findAll();
    },
  },
  Mutation: {
    createUser(_, args, context, info) {
      return models.user.findOne({
        where: {
          email: args.email
        }
      }).then((result) => {
        if (result !== null) {
          throw new Error("User Already Exists!");
        }
        else {
          return models.user.create(args);
        }
      })
    },
  },
  User: {
    first_name(user) {
      return user.first_name;
    },
    last_name(user) {
      return user.last_name;
    },
    email(user) {
      return user.email;
    },
    phone(user) {
      return user.phone;
    },
    city(user) {
      return user.city;
    },
    state(user) {
      return user.state;
    },
    address(user) {
      return user.address;
    },
  },

}

export default Resolvers;
