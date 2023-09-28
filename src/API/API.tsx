import axios from "axios";
import { User } from "src/types/User";
import { UserAPI } from "src/types/UserAPI";

export class API {
    static async getUsers(): Promise<User[]> {
        return await axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) =>
                res.data.map((item: UserAPI) => {
                    return {
                        id: item.id,
                        name: item.name,
                        username: item.username,
                        email: item.email,
                        street: item.address.street,
                        suite: item.address.suite,
                        city: item.address.city,
                        zipcode: item.address.zipcode,
                        phone: item.phone,
                        website: item.website,
                        companyName: item.company.name,
                        catchPhrase: item.company.catchPhrase,
                        bs: item.company.bs,
                    };
                })
            );
    }
}
