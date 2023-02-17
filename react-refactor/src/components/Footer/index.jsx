

export default function Footer(props) {
    // just returning the copyright text
    const {theme} = props;
    return (
        <footer className={theme}>Copyright</footer>
    )

}