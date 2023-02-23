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
  registration(entityType: EntityType) {
    return `/api/registration/${entityType}`;
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
