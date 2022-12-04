import React from "react";

function Home({ data }) {
  return (
    <>
      <p>
        Temprature in {} is {data.temp}
      </p>
      <p>
        Pressure in {} is {data.pressure}
      </p>
    </>
  );
}

export default Home;
