'use client'
import Header from "./Header";
import CardModule from "../CardModule";

const SidebarModule = () => {
  return (
    
      <div className="bg-violet-950 w-full h-screen ">
        <Header />
          <div className="flex items-center justify-between gap-10">
            <CardModule/>
            <CardModule/>
          </div>
      </div>
    
  );
};

export default SidebarModule;

