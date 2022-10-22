const useLocalStore = () => {
  const email = localStorage.getItem("email");
  const name = localStorage.getItem("name");
  const API = localStorage.getItem("API");
  return { email, name, API };
};

export default useLocalStore;
