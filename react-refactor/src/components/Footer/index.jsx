export default function Footer(props) {
    // just returning the copyright text
    const date = new Date();
    const {theme} = props;
    return (
        <footer className={theme}>Copyright {date.getFullYear()}</footer>
    )

}