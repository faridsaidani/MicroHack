import React, { useState } from "react";
import { UserData } from "./data";
import LineChart from "./LineChart";


const List = () => {
    const [userData, setUsertData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [{
            label: "Checked phones",
            data: UserData.map((data) => data.userGain),

        },],
    });
    return (
        <div>
            <h1 className="text-black relative h-100 ml-80 pt-10 text-4xl font-bold"> Welcome Back <span className="text-cyan-500">Mohammed</span></h1>
            <div className="ml-80 mt-20 grid gap-x-8 gap-y-4 grid-cols-3 mr-10">
                <div className=" rounded text-center"><img src="../../assets/card 5.png" alt="stats" /></div>
                <div className=" rounded text-center"><img src="../../assets/card 5.png" alt="stats" /></div>
                <div className=" rounded text-center"><img src="../../assets/card 5.png" alt="stats" /></div>
            </div>
            <div className="ml-80 flex space-x-20">
                    {/* <div><img className="w-25 h-90 ml-80 " src="../../assets/card 1.png" alt="stats" />
                    </div> */}
                    <div className="" ><LineChart className=""  chartData={userData}/></div>
                    <div className="w-100 h-100 mt-20"><img src="../../assets/card 8.png" alt="stats" /></div>
            </div>
            
            
        </div>
    );
}
export default List;