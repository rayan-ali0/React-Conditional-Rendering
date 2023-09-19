import { useEffect, useState } from "react";
import weatherData from '../fakeWeatherData.json'
import Error from './Error'
import Data from "./Data";
import Loading from "./Loading";
import NoData from "./NoData";

const MyCmp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  const getData = () => {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve(null);
      }, 2000);
    });
  };

  useEffect(() => {

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setIsError(false)
        const response = await getData();
        setData(response.cod)
      } catch (error) {
        setIsError(true)
        console.error('Error fetching data:', error)
      } finally {
        setIsLoading(false);

      }
    }

    fetchData()

  }, [])

  const renderContent = () => {
    if (isLoading) return <Loading />;
    if (isError) return <Error />;
    if (data && !isLoading) return <Data data={data} />;
    return <NoData />;
  };

  return <div>{renderContent()}</div>;
}

export default MyCmp