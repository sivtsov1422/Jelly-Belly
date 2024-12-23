import "./App.css";
import Cards from "./components/Cards/index.tsx";
import Header from "./components/header/index.tsx";
import { createContext, Dispatch, useState } from "react";
import Search from "./components/Search/index.tsx";
import useOnlineStatus from "./components/hooks/useOnlineStatus.ts";
import useDeviceType, { DeviceType } from "./components/hooks/useDeviceType.ts";
import { RouterProvider } from "react-router-dom";
import router from "./router.tsx";


type SetThemeType = {
  theme: string;
  setTheme: Dispatch<React.SetStateAction<string>>;
};

export const ThemeContext = createContext<SetThemeType | null>(null);

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;

// const [filterValue, setFilterValue] = useState("");

// const [theme, setTheme] = useState("light");

// const windowSize = useDeviceType()

// return (
//   <ThemeContext.Provider value={{ theme, setTheme }}>
//     <div className={`container ${theme}`}>
//       <Header />
//       {windowSize === DeviceType.MOBILE && <h2>MOBILE</h2>}
//       {windowSize === DeviceType.TABLET && <h2>TABLET</h2>}
//       {windowSize === DeviceType.DESKTOP && <h2>DESKTOP</h2>}

//       <Search setFilterValue={setFilterValue} />
//       <Cards filterValue={filterValue} />
//     </div>
//   </ThemeContext.Provider>
// );