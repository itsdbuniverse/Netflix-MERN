import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { BaseUrl } from '../../../config'

export default function Home() {
  const MONTHS = useMemo(()=>
  [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],[]
  )

  const [userStats, setUserStats] = useState([]);


  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get(BaseUrl + "/users/stats", {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGQzM2E3YzZmZGYzNzk0NjRhOGI5ZjQiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2OTE1NzYzOTcsImV4cCI6MTY5MjAwODM5N30.l5uzFGaYC9UhrJnN92pQBCrs1G6BZaRRWfA4O2gtvxs"
          },
        });
        const statsList = res.data.sort(function (a, b){ // use this to sort data in ascending order so that our map curve sets accordingly
          return a._id - b._id
        });
        statsList.map(item => 
          setUserStats(prev => [...prev,
             { name: MONTHS[item._id - 1], "New User": item.total },
            ])
            ) ;//we did -1 because in our array jan starts from 0 so june be on 5 not 6
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);

  console.log(userStats)
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
