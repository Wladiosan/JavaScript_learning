import React from 'react'
import s from './Content.module.css'
import ContentLogo from "./ContentLogo/ContentLogo";
import ContentBlockInfo from "./ContentBlockInfo/ContentBlockInfo";

function Content (){
    return (
        <div className={s.main_content}>
            <ContentLogo />
            <ContentBlockInfo />
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
        </div>
    )
}

export default Content