import { Outlet } from 'react-router-dom';

const PlanningTools = () => {
    return (
        <div>
            <h2>Planning Tools</h2>
            <Outlet /> {/* This will render the nested components */}
        </div>
    );
};

export default PlanningTools;
