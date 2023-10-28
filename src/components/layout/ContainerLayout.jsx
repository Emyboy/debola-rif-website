const ContainLayout = ({ children, className }) => {
  return (
    <div className={`mx-auto  px-4 md:px-8 lg:px-16 ${className}`}>
      {children}
    </div>
  );
};

export default ContainLayout;
