const useLocalStore = () => {
  const email = localStorage.getItem("email");
  const name = localStorage.getItem("name");
  return { email, name };
};

export default useLocalStore;
