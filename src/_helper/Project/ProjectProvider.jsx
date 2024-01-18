import React, { useState } from 'react';
import Context from './index';
const { All } = require('../../Data/MockTable/Project');

const ProjectProvider = (props) => {
    const [allData, setAllData] = useState(All);

    const addNewProject = (projectData) => {
        const tempObj = {
            id: allData.length + 1,
            title: projectData.title,
            desc: projectData.description,
            badge: 'Done',
            img: 'user/3.jpg',
            sites: 'Themeforest, australia',
            issue: <div className="font-success col-6">40</div>,
            resolved: <div className="font-success col-6">40</div>,
            comment: <div className="font-success col-6">20</div>,
            like: projectData.rate,
            progress: "100",
            customers_img1: 'user/3.jpg',
            customers_img2: 'user/5.jpg',
            customers_img3: 'user/1.jpg',
        };
        setAllData([...allData, tempObj]);
    };
    return (
        <Context.Provider
            value={{
                ...props,
                addNewProject: addNewProject,
                allData,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};
export default ProjectProvider;