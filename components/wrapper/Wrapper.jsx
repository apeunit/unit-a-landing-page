const Wrapper = ({children}) => {
    return ( 
       <section className="xl:mx-auto xl:max-w-container xl:w-89 xl:px-0 lg:px-9.5 px-5">
        {children}
       </section>
     );
}
 
export default Wrapper;