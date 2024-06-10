import errorImage from "../assets/404.png"
import {Button, Center, Stack, Text, useMantineTheme} from "@mantine/core";
import {useNavigate} from "react-router-dom";

export const ErrorPage = () => {
    const theme = useMantineTheme()
    const navigate = useNavigate()

    return <Center mih={'100vh'} bg={theme.colors.gray[1]}>
        <Stack maw={656} align={'center'}>
            <img src={errorImage} alt={'404'} width={"100%"}/>
            <Text fz={'20px'} fw={600} mt={48} mb={16}>We can’t find the page you are looking for</Text>
            <Button bg={theme.colors.purple[4]}
                    ff={theme.fontFamily}
                    onClick={() => {navigate("/")}}
            >
                Go Home
            </Button>
        </Stack>
    </Center>
}