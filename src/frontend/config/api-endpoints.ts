const endpoints = {
  auth: {
    getProviders() {
      return '/api/auth/providers';
    },
  },
  user: {
    getUser() {
      return '/api/user';
    },
  },
  business: {},
  syndicate: {
    getSynidicates() {
      return '/api/syndicate';
    },
    createStructuredSyndicate() {
      return '/api/syndicate/structured';
    },
  },
};

export default endpoints;
