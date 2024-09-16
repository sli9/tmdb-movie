import {Flex, NumberInput, Title} from "@mantine/core";
import {SearchInput} from "../../components/searchPanel/SearchInput.tsx";
import c from "../../components/searchPanel/SearchInput.module.css";
import {useForm} from "@mantine/form";

export const Movies = () => {
    const form = useForm({
        mode: 'uncontrolled',
    })

    return <>
        <Title order={2} mb={"40px"}>Movies</Title>

        <form>
            <Flex gap={'16px'}>
                <SearchInput label={'Genres'}
                             placeholder={'Select genre'}
                             key={form.key('genres')}
                />
                <SearchInput label={'Release year'}
                             placeholder={'Select release year'}
                             key={form.key('release')}
                />
                <Flex className={c.ratings} align={"flex-end"} gap={'16px'}>
                    <NumberInput label={'Ratings'}
                                 placeholder={'From'}
                                 key={form.key('from')}
                                 min={0}
                                 max={10}
                                 classNames={{label: c.label, control: c.control}}
                    />
                    <NumberInput placeholder={'To'}
                                 key={form.key('to')}
                                 min={0}
                                 max={10}
                                 classNames={{label: c.label, control: c.control}}
                    />
                </Flex>
            </Flex>
        </form>
    </>
}