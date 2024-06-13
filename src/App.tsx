import "@mantine/core/styles.css";
import {AppShell, Container, useMantineTheme} from "@mantine/core";
import {Navbar} from "./layout/navbar/Navbar.tsx";
import {Outlet} from "react-router-dom";


export default function App() {
    const theme = useMantineTheme()

    return <AppShell
        styles={{
            navbar: {
                backgroundColor: theme.colors.purple[0],
                color: theme.black
            },
            main: {
                backgroundColor: theme.colors.gray[1],
            }
        }}
        navbar={{
            width: 280,
            breakpoint: "sm",
        }}
    >
        <AppShell.Navbar p="24px" withBorder={false}>
            <Navbar/>
        </AppShell.Navbar>
        <AppShell.Main>
            <Container p={"40px 90px"} size={"xl"}>
                <Outlet/>
            </Container>
        </AppShell.Main>
    </AppShell>
}
