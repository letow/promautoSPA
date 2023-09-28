import "./App.scss";
import Card from "./components/Card/Card";
import Select from "./components/Select/Select";
import { useEffect, useState } from "react";
import { DropdownProps } from "semantic-ui-react";
import { User } from "./types/User";
import { API } from "./API/API";

const App = () => {
    const [filters, setFilters] = useState<string[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
    const [names, setNames] = useState<string[]>([]);
    const [fetching, setFetching] = useState<boolean>(true);
    const [dark, setDark] = useState<boolean>(false);

    const changeHandler = (e: DropdownProps) => {
        setFilters(e.value as string[]);
    };

    const clearFilters = () => {
        setFilters([]);
    };

    const toggleDark = (open: boolean) => {
        setDark(open);
    };

    useEffect(() => {
        if (fetching) {
            API.getUsers().then((res: User[]) => {
                setUsers(res);
                setNames([...res.map((user) => user.name)]);
                setFetching(false);
            });
        }
    }, [fetching]);

    useEffect(() => {
        if (filters.length) {
            setFilteredUsers(users.filter((user) => filters.includes(user.name)));
        } else {
            setFilteredUsers(users);
        }
    }, [filters, users]);

    return (
        <div className="App">
            <div className={`background ${dark ? "show" : ""}`}></div>
            <header>User list</header>
            <div className="wrapper">
                <div className="filters">
                    <Select
                        names={names}
                        changeHandler={changeHandler}
                        filters={filters}
                    />
                    <div className="filters-info">
                        <span className="filters-counter">
                            Filter: {filters.length}
                        </span>
                        <u>
                            <span className="filters-clear" onClick={clearFilters}>
                                Clear all
                            </span>
                        </u>
                    </div>
                    <p className="filters-names">Name: {filters.join(", ")}</p>
                </div>
                <div className="cards">
                    {filteredUsers.length ? (
                        filteredUsers.map((user: User) => (
                            <Card key={user.id} user={user} activeCard={toggleDark} />
                        ))
                    ) : (
                        <>Loading...</>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
