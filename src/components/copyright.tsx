


const Copyright = () => {
  const currentYear = new Date().getFullYear();
  const authorName = 'Eddy Luo, Johan Li, Justin Zhang';
  const email = "m1662576219@gmail.com";
  return (
    <div className="text-center text-gray-500 text-sm py-4 flex flex-col">
      <p>&copy; {currentYear} {authorName}. All rights reserved.</p>
      <p>Contact us by {email}</p>
    </div>
  );
};

export default Copyright;