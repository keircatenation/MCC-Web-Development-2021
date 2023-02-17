import Dragon from "../Dragon"

export default function Main(props) {
    const {theme, dragons} = props;

    return (
        <main className={theme}>
            <h1>Dragon Arena</h1>
            <section className='dragons'>
                {
                    dragons.map( (dragon, index) =>{

                        return (
                            <Dragon fill1={dragon.fill1} fill2={dragon.fill2} fill3={dragon.fill3} key={index} name={dragon.name} />
                        )
                    } )
                }
            </section>
        </main>
    )

}