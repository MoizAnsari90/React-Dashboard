
import Header from "@/app/Component/Dashboard/Header";
import { CartData } from "@/utils/Constant/Card";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const Dashboard = () => {
  
  return (
    < >
     <div className="bg-black w-full h-screen ">
      <Header />
          <div className="flex justify-evenly mt-5 items-center gap-10">
            {
              CartData.map((item,index)=>{
                const{title , content} = item;
                  return(
                    <div key={index}>
                      <Card className="bg-slate-900 text-white border-0">
                        <CardHeader>
                          <CardTitle>{title}</CardTitle>
                          <CardDescription className="text-white">{content}</CardDescription>
                        </CardHeader>
                      </Card>
                    </div> 
                  )
              })
            }
          </div>
      </div>
    </>
  );
}

export default Dashboard;
