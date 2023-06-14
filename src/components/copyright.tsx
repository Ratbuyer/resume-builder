


const Copyright = () => {
  const currentYear = new Date().getFullYear();
  const authorName = 'resumedev.site';
  const email = "m1662576219@gmail.com";
  return (
    <div
      className="mt-10 text-center text-gray-500 text-sm py-4 flex flex-col"
    >
      <p>&copy; {currentYear} {authorName}</p>
      <p>Contact us by {email}</p>
    </div>
  );
};

export default Copyright;