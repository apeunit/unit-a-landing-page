const Wrapper = ({children}) => {
    return ( 
       <section className="mx-auto max-w-maxWidth xl:px-0 lg:px-9.5 px-5">
        {children}
       </section>
     );
}
 
export default Wrapper;