import Dragon from "../Dragon"

export default function Main(props) {
    const {theme} = props;

    return (
        <main className={theme}>
            <h1>Dragon Arena</h1>
            <section className='dragons'>
                <Dragon />
            </section>
        </main>
    )

}