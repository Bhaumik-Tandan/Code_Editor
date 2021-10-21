import React from 'react'
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/mode-css'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/mode-ruby'
import 'ace-builds/src-noconflict/mode-c_cpp'
import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/theme-terminal'
import 'ace-builds/src-noconflict/theme-solarized_dark'
import 'ace-builds/src-noconflict/theme-twilight'
import "ace-builds/src-noconflict/ext-language_tools";
function TextEditor(props) {
 
  function onChange(e)
  {
    localStorage[props.localStorageName] = e;
    props.setFun(e);
  }
  
    return (
        <AceEditor
            style={props.settings.style}
            value={localStorage[props.localStorageName]}
            placeholder={props.settings.placeholder}
            mode={props.settings.mode}
            theme={props.settings.theme}
            onChange={onChange}
            fontSize={props.settings.fontSize}
            showGutter={true}
            highlightActiveLine={true}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: props.settings.tabSize,
            }} />
    )
}

export default TextEditor;
