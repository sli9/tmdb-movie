import {Group, Image, Space, Stack, Text} from "@mantine/core";
import logoImage from "../../assets/img.png"
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return <>
        <Group gap={"12px"} c={"#9854F6"}>
            <Image src={logoImage} maw={"32px"} mah={"32px"}/>
            <Text ff={"Poppins, sans-serif"} fz={"24px"} fw={600} lh={"36px"}>ArrowFlicks</Text>
        </Group>
        <Space h="80px"/>
        <Stack gap={"16px"} fw={400}>
            <Text component={NavLink} variant="navLink" to={"/"} h={"42px"}>Movies</Text>
            <Text component={NavLink} variant="navLink" to={"/rated"} h={"42px"}>Rated movies</Text>
        </Stack>

    </>
}