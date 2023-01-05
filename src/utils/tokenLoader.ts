const tokenLoader = () => {
  return localStorage.getItem("token");
};

export default tokenLoader;
