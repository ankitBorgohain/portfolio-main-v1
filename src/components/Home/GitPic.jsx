import React, { useState, useEffect } from 'react';

function GitPic() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/ankitBorgohain');
        const userData = await response.json();
        setData(userData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Clean up if component unmounts before data is fetched
    return () => {};
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Error fetching data</div>;
  }

  return (
    <>
    <img className='rounded-lg' src={data.avatar_url} alt='Git Picture' width={300} />
    <figcaption className='text-white'>Hi there 🙋!!</figcaption>
    </>
  );
}

export default GitPic;
