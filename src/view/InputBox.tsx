import React from 'react';
import CodeMirror from 'react-codemirror';
require('codemirror/lib/codemirror.css');
require('./InputBox.css');
require('codemirror/mode/python/python');

interface InputBoxProps {
  query: string;
  onQueryChange: (query: string) => void;
}

/**
 * InputBox is where the user can enter their boolean expression.
 */
export const InputBox = React.memo(function InputBox(props: InputBoxProps) {
  const codeMirrorOptions = {
    value: 'p and q',
    mode: { name: 'python' },
    viewportMargin: Infinity,
  };

  return (
    <div>
      <CodeMirror
        value={props.query}
        onChange={props.onQueryChange}
        options={codeMirrorOptions}
      />
    </div>
  );
});
