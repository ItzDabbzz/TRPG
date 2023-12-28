import {useEffect, useMemo} from 'react';
import {Terminal} from "./components/Terminal.tsx";
import {useTerminal} from "./components/TerminalHooks.tsx";
import {Header} from "./components/Header.tsx";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import {Footer} from "./components/Footer.tsx";

function App() {
    const {
        history,
        pushToHistory,
        setTerminalRef,
        resetTerminal,
    } = useTerminal();


    useEffect(() => {
        resetTerminal();

        pushToHistory(<>
                <div><strong>Welcome!</strong> to the terminal.</div>
                <div style={{fontSize: 20}}>Here is where you <span style={{color: 'yellow'}}><strong>Play</strong></span>.
                    Awesome, right?
                </div>
                <div>Commands: help, start, alert, stats, info, save, load, exit</div>
                <br/>
            </>
        );
    }, []);

    const commands = useMemo(() => ({
        'start': async () => {
            await pushToHistory(<>
                <div>
                    <strong>Starting</strong> the server... <span style={{color: 'green'}}>Done</span>
                </div>
            </>);
        },
        'alert': async () => {
            alert('Hello!');
            await pushToHistory(<>
                <div>
                    <strong>Alert</strong>
                    <span style={{color: 'orange', marginLeft: 10}}>
              <strong>Shown in the browser</strong>
            </span>
                </div>
            </>);
        },
    }), [pushToHistory]);

    return (
        <div className="App">
            <Header/>
            <Terminal
                history={history}
                ref={setTerminalRef}
                promptLabel={<>user@TRPG.net&gt;</>}
                commands={commands}
            />
            <Footer/>
            <Tooltip id="license-tooltip" />
        </div>
    );
}

export default App;