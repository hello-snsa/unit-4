export default function MobileOs({ data }) {

    console.log(data)
    return (
        <div className="mainDiv">

            {
                data.map((e) => {

                    return (
                        <>
                            <h1>{e.title}</h1>

                            <div className="lists">
                                {

                                    (e.list).map((ex) => (

                                        <li>{ex}</li>

                                    ))

                                }

                            </div>
                        </>
                    )
                }

                )
            }


        </div>
    )

}