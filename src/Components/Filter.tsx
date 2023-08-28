import React,{use, useState} from "react";
import { StateContext } from "@/context/StateContext";
import Image from "next/image";

const Filter = ({items}) =>{ 
    const [q,setQ] = useState("");
    const [searchParams] = useState(["Name"]);

    const search = (items) =>{
        return items.filter((item) =>{
            return searchParams.some((newItem) =>{
                return(
                    item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
                );
            });
        });
    }

    return (
        <div>
            <div>
                <label htmlFor="search-form">
                    <input
                    type="search"
                    name="search-form"
                    id="search-form"
                    placeholder="Search..."
                    value={q}
                    onChange={(event) => setQ(event.target.value)}
                    />
                    <span className="sr-only">Search Food here</span>
                </label>
            </div>
            <div>
                <ul>
                {console.log(items)}
                {items && search(items).map((item) => (
                            <li key={item.id}>
                                <article className="card" >
                                    <div className="card-image">
                                        <Image src={item.flag} alt={item.name} />
                                    </div>
                                    <div className="card-content">
                                        <h2 className="card-name">{item.name}</h2>
                                        <ol className="card-list">
                                        <li>
                                                Name:{" "}
                                                <span>{item.Name}</span>
                                            </li>
                                            <li>
                                                Type:{" "}
                                                <span>{item.Type}</span>
                                            </li>
                                            <li>
                                                Price: <span>{item.Price}</span>
                                            </li>
                                            
                                        </ol>
                                    </div>
                                </article>
                            </li>
                        ))}
                </ul>
            </div>

        </div>
    )
}



export default Filter