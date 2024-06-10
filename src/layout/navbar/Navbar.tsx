import {Group, Image, Space, Stack, Text} from "@mantine/core";
import logoImage from "../../assets/logo.png"
import {NavLink} from "react-router-dom";
import c from "./Navbar.module.css"

const navbarItems = [
    {
        title: 'Movies',
        link: '/movies'
    },
    {
        title: 'Rated movies',
        link: '/rated'
    }
]
export const Navbar = () => {

    return <>
        <Group gap={"12px"} c={"purple.4"}>
            <Image src={logoImage} maw={"32px"} mah={"32px"}/>
            <Text ff={"Poppins, sans-serif"} fz={"24px"} fw={600} lh={"36px"}>ArrowFlicks</Text>
        </Group>
        <Space h="80px"/>
        <Stack gap={"16px"}>
            {navbarItems.map((item, index) =>
                <NavLink key={index} to={item.link}
                         className={({isActive}) => isActive ? c.active : ""}>{item.title}</NavLink>
            )}
        </Stack>

    </>
}