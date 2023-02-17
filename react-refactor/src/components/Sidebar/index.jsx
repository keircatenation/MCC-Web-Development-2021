import { dragonTypes } from "../../assets/data";
import Dragon from "../Dragon";
import DragonButton from "../DragonButton";

export default function Sidebar(props) {
    const { theme, setDragons } = props;
    function addDragon( dragonTypeIndex ) {
        // console.log(dragonTypes, dragonTypeIndex);
        let type = dragonTypes[dragonTypeIndex];
        let dragon = {
            name: type[0],
            fill1: type[1][0],
            fill2: type[1][1],
            fill3: type[1][2]
        };
        setDragons( prev => [...prev, dragon] )
    }
    return (
        <aside className={theme}>
            <h2>Add some dragons!</h2>
            {
                dragonTypes.map(( type, index ) => {
                    let name = type[0];
                    let fills = type[1];
                    console.log(name, index)
                    return <DragonButton name={name} key={index} dragonIndex={index} addDragon={addDragon} fill1={fills[0]} fill2={fills[1]} fill3={fills[2]} />
                })
            }
        </aside>
    )

}