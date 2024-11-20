import React, {useState} from "react";

function App(){
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const handleMouseEnter = ()=> setIsSubMenuOpen(true);
    const handleMouseEnter = ()=> setIsSubMenuOpen(false);

    const styles ={
        app:{
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f3f4f6',
            minHeight: '100vh',
            padding: '10px'
        }
    }
}