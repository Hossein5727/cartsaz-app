const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {

    const handleClick = () => {
        setActiveTab(id);
    };

    return (
        <li onClick={handleClick} className={activeTab === id ? "text-main-blue transition-all duration-150" : "transition-all duration-150"}>
            {title}
        </li>
    );
};
export default TabNavItem;