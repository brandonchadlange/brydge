const endpoints = {
  auth: {
    getProviders() {
      return "/api/auth/providers";
    },
  },
  business: {},
  syndicate: {
    getSynidicates() {
      return "/api/syndicate";
    },
    createStructuredSyndicate() {
      return "/api/syndicate/structured";
    },
  },
};

export default endpoints;
