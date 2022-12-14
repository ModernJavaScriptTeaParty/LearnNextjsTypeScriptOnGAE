import Container  from "components/container"
import Logo from "components/logo"
import Nav from "components/nave"
import styles from "styles/header.module.css"

export default function Header() {
    return (
        <header>
            <Container large = {true}>
                <div className={styles.flexContainer}>
                    <Logo boxOn />
                    <Nav />
                </div>
            </Container>
        </header>
    )
}