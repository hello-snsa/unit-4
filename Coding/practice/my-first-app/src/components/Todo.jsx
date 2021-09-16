import { useEffect, useState } from "react";
import "./todoStyle.css";

export function Todo() {
    //   const [text, aetText] = useState([]);
    const [text, setText] = useState("");
    const [todosList, setTodosList] = useState([]);
    const [loding, setLoding] = useState(false);
    const [page, setPage] = useState(1);

    const handle = (e) => {
        console.log("input", e.target.value);
        setText(e.target.value);
    };
    useEffect(() => {
        getTodos();
    }, [page]);

    function getTodos() {
        fetch(`http://localhost:3001/todos?_page=${page}&_limit=4`)
            .then((data) => data.json())
            .then((data) => {
                console.log("t", data.length);

                setLoding(false);
                setTodosList(data);
                if (data.length === 0) {
                    setPage(page - 1);
                }
            });
    }
    if (page === 0) {
        setPage(1);
    }

    return loding ? (
        "loding..."
    ) : (
        <div className="div">
            <div style={{ fontSize: "19px" }}>Page No..{page}</div>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
            <div className="append">
                {todosList.map((e) => (
                    <div className="map">
                        {" "}
                        {e.title}
                        <i
                            style={{
                                width: "40px",
                                fontSize: "40px",
                                float: "right",
                                marginTop: "10px",
                                borderRadius: "5px",
                            }}
                            onClick={() => {

                                fetch(`http://localhost:3001/todos/${e.id}`, {
                                    method: "DELETE",
                                }).then(() => {
                                    getTodos();

                                });

                            }}
                            className="material-icons"
                        >
                            close
                        </i>
                        {/* <button style={{width:"40px",fontSize:"10px",float:"right",marginTop:"20px",borderRadius:"5px",backgroundColor:"gray"}} 
         >dlete</button> */}
                    </div>
                ))}
            </div>

            <div className="div1">
                <div className="float" style={{ float: "left" }}>
                    {" "}
                    <input onChange={handle} type="text" placeholder="Add Todo" />
                </div>

                <i
                    className="material-icons"
                    id="todo"
                    onClick={() => {
                        const data = {
                            title: text,
                            status: false,
                        };
                        if (text.length === 0) {
                            return "add text";
                        } else {
                            // setTodosList([...todosList, data]);
                            fetch(`http://localhost:3001/todos/`, {
                                method: "POST",
                                body: JSON.stringify(data),
                                headers: {
                                    "Content-Type": "application/json",
                                },
                            }).then(() => {
                                getTodos();
                            });
                        }
                    }}
                >
                    add
                </i>

            </div>
            <i style={{ padding: "10px", float: "left", letterSpacing: "-9px" }}
                className="material-icons"
                onClick={() => {
                    setPage(page - 1);
                }}
            >
                arrow_back_iosarrow_back_iosarrow_back_ios {page}
            </i>
            <i style={{ padding: "10px", float: "right", letterSpacing: "-9px", }}
                className="material-icons"
                onClick={() => {
                    setPage(page + 1);
                }}
            >
                arrow_forward_ios arrow_forward_iosarrow_forward_ios{page}
            </i>
        </div>
    );
}