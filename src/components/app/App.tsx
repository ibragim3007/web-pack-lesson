import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import s from "./App.module.scss";
import bartPng from "@/assets/bart_png.png";
import bartJpg from "@/assets/bart_jpg.jpeg";
import IconSvg from "@/assets/iconsvg.svg";

const App = () => {
  const [counter, setCounter] = useState(0);

  const inc = () => setCounter(counter + 1);
  return (
    <div>
      <div data-testId="AppTestId">
        <img width={100} src={bartPng} />
        <img width={100} src={bartJpg} />
        <div>
          <IconSvg stroke="green" width={100} height={100} />
        </div>
      </div>
      <Link to={"/about"}>About</Link>
      <Link to={"/shop"}>Shop</Link>
      счетчик:<span className={s.value}> {counter}</span>
      <button className={s.button} onClick={inc}>
        Inc
      </button>
      <Outlet />
    </div>
  );
};

export default App;
