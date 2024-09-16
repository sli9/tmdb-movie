import { useState } from 'react';
import {CheckIcon, Combobox, Group, Input, Loader, Pill, PillsInput, useCombobox} from '@mantine/core';
import c from './SearchInput.module.css'
import {SelectIcon} from "../../assets/icons/SelectIcon.tsx";

type SearchInputPropsType = {
    placeholder: string
    label: string
}

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate', 'Drama'];

const MAX_DISPLAYED_VALUES = 2;

function getAsyncData() {
    return new Promise<string[]>((resolve) => {
        setTimeout(() => resolve(groceries), 2000);
    });
}

export function SearchInput({placeholder, label}: SearchInputPropsType) {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [value, setValue] = useState<string[]>([]);
    const [data, setData] = useState<string[]>([])

    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
        onDropdownOpen: () => {
            if (data.length === 0 && !isLoading) {
                setIsLoading(true);
                getAsyncData().then((response) => {
                    setData(response);
                    setIsLoading(false);
                    combobox.resetSelectedOption();
                })
            }
            combobox.updateSelectedOptionIndex('active')
        }
    });



    const handleValueSelect = (val: string) =>
        setValue((current) =>
            current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
        );

    const handleValueRemove = (val: string) =>
        setValue((current) => current.filter((v) => v !== val));

    const values = value
        .slice(
            0,
            MAX_DISPLAYED_VALUES === value.length ? MAX_DISPLAYED_VALUES : MAX_DISPLAYED_VALUES - 1
        )
        .map((item) => (
            <Pill key={item} bg={'none'} classNames={{label: c.pillLabel}} withRemoveButton onRemove={() => handleValueRemove(item)}>
                {item}
            </Pill>
        ));

    const options = groceries.map((item) => (
        <Combobox.Option value={item} key={item} active={value.includes(item)}>
            <Group gap="sm">
                {value.includes(item) ? <CheckIcon size={12} /> : null}
                <span>{item}</span>
            </Group>
        </Combobox.Option>
    ));

    return (
        <Combobox store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false}>
            <Combobox.DropdownTarget>
                <PillsInput pointer
                            onClick={() => combobox.toggleDropdown()}
                            label={label}
                            classNames={{input: c.input, label: c.label, section: c.section}}
                            rightSection={isLoading ?
                                <Loader size={18} color="var(--mantine-color-grey-500)"/> :
                                <SelectIcon size={{width: 17, height: 8}}/>}
                            rightSectionPointerEvents="none"
                >
                    <Pill.Group>
                        {value.length > 0 ? (
                            <>
                                {values}
                                {value.length > MAX_DISPLAYED_VALUES && (
                                    <Pill>+{value.length - (MAX_DISPLAYED_VALUES - 1)} more</Pill>
                                )}
                            </>
                        ) : (
                            <Input.Placeholder>{placeholder}</Input.Placeholder>
                        )}

                        <Combobox.EventsTarget>
                            <PillsInput.Field
                                type="hidden"
                                onBlur={() => combobox.closeDropdown()}
                                onKeyDown={(event) => {
                                    if (event.key === 'Backspace') {
                                        event.preventDefault();
                                        handleValueRemove(value[value.length - 1]);
                                    }
                                }}
                            />
                        </Combobox.EventsTarget>
                    </Pill.Group>
                </PillsInput>
            </Combobox.DropdownTarget>

            <Combobox.Dropdown>
                <Combobox.Options> {isLoading ? <Combobox.Empty>Loading....</Combobox.Empty> : options}</Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
}