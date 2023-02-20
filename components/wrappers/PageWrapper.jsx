const PageWrapper = ({ children }) => {
  return (
    <section className="px-5 mx-auto sm:px-0 xl:max-w-7xl sm:w-11/12">
      {children}
    </section>
  );
}

export default PageWrapper;