import { FC } from "react";
import { Dropdown, DropdownItemProps, DropdownProps } from "semantic-ui-react";
import "./Select.scss";

interface ISelectProps {
    filters: string[];
    names: string[];
    changeHandler: (data: DropdownProps) => void;
}

const Select: FC<ISelectProps> = ({ changeHandler, filters, names }) => {
    const usernames: DropdownItemProps[] = [
        ...names.map((item) => {
            return {
                key: item,
                value: item,
                text: item,
            };
        }),
    ];

    const handleChange = (_: any, data: DropdownProps) => {
        changeHandler(data);
    };

    return (
        <Dropdown
            id="Select"
            placeholder={"Select name"}
            search
            selection
            multiple
            clearable
            options={usernames}
            value={filters}
            onChange={handleChange}
        />
    );
};

export default Select;
