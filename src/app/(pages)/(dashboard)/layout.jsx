'use client'
import { DashboardModule } from "@/app/Component/Dashboard/DashboardModule";


const layout = ({ children }) => {

  
  return (
    
        <div className=" flex w-full h-[100vh] ">
        <DashboardModule />
        { children }  
        </div>
         
  
  );
}

export default layout;

