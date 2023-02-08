const endpoints = {
  auth: {
    getProviders() {
      return "/api/auth/providers";
    },
  },
  user: {
    getUser() {
      return "/api/user";
    },
    updateUser() {
      return "/api/user";
    },
  },
  business: {
    createBussiness() {
      return "/api/business";
    },
  },
  syndicate: {
    getSynidicates() {
      return "/api/syndicate";
    },
    createStructuredSyndicate() {
      return "/api/syndicate/structured";
    },
  },
  uploadFile() {
    return "/api/s3/upload-file";
  },
  document: {
    upload() {
      return "/api/document";
    },
  },
};

export default endpoints;
