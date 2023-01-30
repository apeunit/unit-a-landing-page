const PageWrapper = ({ children }) => {
  return (
    <section className="xl:max-w-320 w-320 xl:px-0 px-5 max-w-97.5 md:max-w-233 mx-auto">
      {children}
    </section>
  );
}

export default PageWrapper;