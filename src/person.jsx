
import { useEffect, useState } from "react";

function Person() {
    const [show, setShow] = useState(false);
    const [time, setTime] = useState(new Date().getTime());
    const PersonObj = {
        fullName: 'Cristiano Ronaldo',
        bio: 'Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese professional footballer who plays as a forward for and captains both Saudi Pro League club Al Nassr and the Portugal national team.',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcRpHXtbhC6fdsblDMYVawwtq0F4vFP9fjlA&usqp=CAU',
        profession: 'FootBall'
    }

    //get the update
    useEffect(() => {
        if (!show) return;

        setTime((prevTime) => (new Date().getTime()) - prevTime);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show]);

    console.log(time);

    return (
        <>
            {show &&
                <div className="person">
                    <h3>FullName: {PersonObj.fullName}</h3>
                    <h3>Bio: {PersonObj.bio}</h3>
                    <h3>Image: <img src={PersonObj.imgSrc} alt="" /></h3>
                    <h3>Profession: {PersonObj.profession}</h3>
                </div>
            }
            <div className="action">
                <button onClick={function () {
                    setShow((prevShow) => !prevShow);
                }}>Toggle</button>
            </div>
        </>
    )
}

export default Person;