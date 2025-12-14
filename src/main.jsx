import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Avatar, Content } from "./containers/containers";
import { SpiderWebBackground } from "./components/components";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <div className="fixed w-[500px] h-[500px] rounded-br-full bg-neutral-800/50"></div> */}
    <SpiderWebBackground />
    <div className="w-full flex justify-center relative">
      <div className="w-full lg:w-[1000px] flex flex-col lg:flex-row">
        <Avatar />
        <Content />
      </div>
    </div>
  </StrictMode>
);
