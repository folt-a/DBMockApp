import { useState } from "react";
import "./App.css";
import DockLayout, { LayoutData } from 'rc-dock'
import "rc-dock/dist/rc-dock.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Tab, Tabs } from 'react-bootstrap';
import { MainView } from "./MainView";
import { DockExampleView } from "./DockExampleView";
const { DRB } = window;


export const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="container">

            <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="home" title="Home">
                    <MainView />
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <p draggable="true"
                        // https://developer.mozilla.org/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#%E3%83%89%E3%83%A9%E3%83%83%E3%82%B0%E6%93%8D%E4%BD%9C%E3%81%AE%E9%96%8B%E5%A7%8B
                        onDragStart={(event) => {
                            console.log("onDragStart", event);
                            event.dataTransfer.setData("text/plain", "てすとでーた");
                            event.dataTransfer.effectAllowed = "move";
                        }}
                        onDragEnter={(event) => {
                            console.log("onDragEnter", event);
                            event.preventDefault();
                        }}
                        onDragEnterCapture={(event) => {
                            console.log("onDragEnterCapture", event);
                        }}
                        // 掴んで動かしている間、src 側に発生する
                        // onDrag={event => {
                        //     console.log("onDrag", event);
                        // }}
                        // 掴んで動かしている間、dst 側に発生する
                        onDragOver={(event) => {
                            //console.log("onDragOver", event);
                            event.dataTransfer.effectAllowed = "move";
                            event.preventDefault();
                        }}
                        onDragExit={(event) => {
                            console.log("onDragExit", event);
                        }}
                        onDragEnd={(event) => {
                            console.log("onDragEnd", event);
                        }}
                        onDrop={(event) => {
                            console.log("onDrop", event);
                            const data = event.dataTransfer.getData("text/plain");
                            alert(data);
                        }}
                    >ドラッグアンドドロップできる要素</p>
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    <DockExampleView />
                </Tab>
            </Tabs>
        </div>
    );
};

