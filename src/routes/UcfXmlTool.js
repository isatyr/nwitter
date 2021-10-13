

import SplitPane from 'react-split-pane';
import Pane from 'react-split-pane';

const UcfXmlTool = () => {    
    return (
        <SplitPane split="vertical">
          <Pane initialSize="200px" minSize="10%">You can use a Pane component</Pane>
          <Pane>Using a Pane allows you to specify any constraints
            directly</Pane>
        </SplitPane>
    );
  };


export default UcfXmlTool;
