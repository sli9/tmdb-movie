import {Flex, Select, Title} from "@mantine/core";
import {SelectIcon} from "../../assets/icons/SelectIcon.tsx";
import c from "./Movies.module.css"

export const Movies = () => {
    return <>
        <Title order={2} mb={"40px"}>Movies</Title>

        <Flex>
            <Select
                classNames={{wrapper: c.wrapper, label: c.label, input: c.input, section: c.section}}
                data={['React', 'Angular', 'Vue']}
                rightSectionPointerEvents="none"
                rightSection={<SelectIcon size={17}/>}
                label="Genres"
                placeholder="Select genre"
            />
        </Flex>
    </>
}