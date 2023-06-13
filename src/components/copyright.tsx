const Copyright = () => {
  const currentYear = new Date().getFullYear();
  const authorName = 'Eddy Luo, Johan Li, Justin Zhang';

  return (
    <div className="text-center text-gray-500 text-sm py-4">
      <p>
        &copy; {currentYear} {authorName}. All rights reserved.
      </p>
    </div>
  );
};

export default Copyright;