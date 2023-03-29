import React, { useState, useEffect } from 'react';
import MyTable from './Table';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortColumn, setSortColumn] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("data.json");
      const json = await response.json();
      setData(json);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <MyTable
          data={data}
          sortColumn={sortColumn}
          sortOrder={sortOrder}
          setSortColumn={setSortColumn}
          setSortOrder={setSortOrder}
        />
      )}
    </div>
  );
}

export default App;
