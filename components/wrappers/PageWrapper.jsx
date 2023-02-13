const PageWrapper = ({ children }) => {
  return (
    <section className="px-5 mx-auto xl:px-0 max-w-320">
      {children}
    </section>
  );
}

export default PageWrapper;