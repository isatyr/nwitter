

import SplitPane from 'react-split-pane';
import Pane from 'react-split-pane';

const UcfXmlTool = () => {    
    return (
        <SplitPane>
            <Pane minSize="200px" initialSize="500px">This Pane has a minimum size of 200px</Pane>
            <Pane/>
        </SplitPane>
    );
  };


export default UcfXmlTool;
