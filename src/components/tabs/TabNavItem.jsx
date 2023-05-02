const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {

    const handleClick = () => {
        setActiveTab(id);
    };

    return (
        <li onClick={handleClick} className={activeTab === id ? "text-main-blue transition-all duration-150" : "transition-all duration-150"}>
            {title}

            <div className={`w-[100px] h-[3px] bg-main-blue transition-all duration-150 translate-y-2 translate-x-5 ${activeTab==id?"opacity-100":"opacity-0"}`}/>
            
        </li>
    );
};
export default TabNavItem;