import "./App.css";
import { createContext, Dispatch, } from "react";
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