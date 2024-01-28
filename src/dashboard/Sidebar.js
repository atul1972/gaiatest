import menuDataJson from '../login.json';
const menuData = menuDataJson.menuData;
const Sidebar = (props) => {
    const { username, steps, updateSteps } = props;

    const handleClick = (val) => {  
        updateSteps(val+1);
    }
    return (
        <>
            <div className="sidebar">
                <ul>
                    {
                        Object.keys(menuData).map((item, i)=>{
                            if(username===menuData[item].username) {
                                return menuData[item].modules.map((item, i)=>{
                                    return <li key={i}><p className={steps===i+1?'active':''} onClick={()=>handleClick(i)}>{item.module_name}</p></li>
                                })
                            }
                        })
                    }
                </ul>
            </div>
        </>
    )
}
export default Sidebar;