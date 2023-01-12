const Wrapper = ({children}) => {
    return ( 
      //  <section className="px-5 xl:mx-auto xl:max-w-[1280px] w-[1280px] xl:px-0 lg:px-9.5   max-w-70 md:max-w-[932px] mx-auto">
       <section className="xl:mx-auto xl:max-w-320 w-320 xl:px-0 lg:px-9.5 px-5 max-w-97.5 md:max-w-233 mx-auto">
        {children}
       </section>
     );
}
 
export default Wrapper;