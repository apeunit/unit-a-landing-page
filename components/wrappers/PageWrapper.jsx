const PageWrapper = ({children}) => {
    return ( 
       <section className="xl:mx-auto xl:max-w-320 w-320 xl:px-0 lg:px-9.5 px-5 max-w-97.5 md:max-w-233 mx-auto">
        {children}
       </section>
     );
}
 
export default PageWrapper;