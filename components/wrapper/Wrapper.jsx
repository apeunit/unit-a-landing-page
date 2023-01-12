const Wrapper = ({children}) => {
    return ( 
       <section className="px-5 xl:mx-auto xl:max-w-[1280px] w-[1280px] xl:px-0 lg:px-9.5   max-w-[390px] md:max-w-[932px] mx-auto">
        {children}
       </section>
     );
}
 
export default Wrapper;