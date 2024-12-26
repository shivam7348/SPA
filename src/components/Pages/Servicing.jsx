import React, { useEffect, useState } from 'react';

function Github() {
  const [gitdata, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/shivam7348')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="min-h-60	pt-30 pb-30 flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="max-w-md p-6 bg-white shadow-lg rounded-lg text-center">
        {gitdata ? (
          <>
            <p className="text-lg font-bold text-gray-700">Servicing: {gitdata.login}</p>
            <img
              src={gitdata.avatar_url}
              alt={`${gitdata.login}'s avatar`}
              className="w-36 h-36 mx-auto rounded-full border-4 border-purple-500"
            />
          </>
        ) : (
          <p className="text-lg font-semibold text-gray-600">Loading...</p>
        )}
      </div>
     
    </div>
  );
}

export default Github;
