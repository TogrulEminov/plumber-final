import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const mainContext = createContext(null);

function Context({ children }) {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    name: "",
    description: "",
    url: "",
    price:""
  });
  const [sorted, setSorted] = useState({ sorted: "price", reversed: false });
  const url = `http://localhost:8080/card/${search}`;

  const getData = async () => {
    const response = await axios.get("http://localhost:8080/card")
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const postData = () => {
    if (!state.name || !state.description || !state.url) return;
    axios.post("http://localhost:8080/card", state);
    setState({
      name: "",
      description: "",
      url: "",
      price:""
    });
    getData();
  };

  const delData = (index) => {
    axios.delete(`http://localhost:8080/card/${index}`);
    getData();
  };
  const openInput = () => {
    setOpen(!open);
  };
  const searchData = (e) => {
    setSearch(e.target.value);
  };
  
  const sortedData = () => {
    setSorted({ sorted: "price", reversed:!sorted.reversed });
    let dataCopy = [...data];
    dataCopy.sort((a, b) => {
      if (sorted.reversed) {
        return a.price - b.price;
      }
      return b.price - a.price;
    });
    setData(dataCopy);
  };
  const Values = {
    data,
    open,
    openInput,
    postData,
    delData,
    state,
    handleChange,
    searchData,
    sortedData,
    search
  };
  return <mainContext.Provider value={Values}>
    {children}
    </mainContext.Provider>;
}

export default Context