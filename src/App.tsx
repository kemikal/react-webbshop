import { useEffect, useState } from 'react'
import './App.css'
import Start from './Start';
import Products from './Products';
import About from './About';
import Admin from './Admin';
import Meny from './components/Meny';

function App() {

  const [admin, setAdmin] = useState<boolean>(false);
  const [page, setPage] = useState<string>("");

  useEffect(() => {
    setAdmin(true)
  }, [])

  useEffect(() => {

    let pageUrl = page;

    if (!pageUrl) {
        const queryParameters = new URLSearchParams(window.location.search);
        const getUrl = queryParameters.get("page");

      if (getUrl) {
        pageUrl = getUrl;
        setPage(getUrl)
      } else {
        pageUrl = "start"
      }
    } 

    window.history.pushState(
      null,
      "",
      "?page=" + pageUrl
    )

  }, [page])

  return (
    <>
      <h1>Webbshop</h1>
      <Meny admin={admin} setPage={setPage} />

      {
        {
          "about": <About />,
          "products": <Products />,
          "admin": <Admin />,
        } [page] || <Start />
      }

    </>
  )
}

export default App