import React from 'react';
import CodeMirror from 'react-codemirror';
require('codemirror/lib/codemirror.css');

interface InputBoxProps {
  query: string;
  onQueryChange: (query: string) => void;
}

/**
 * InputBox is where the user can enter their boolean expression.
 */
export const InputBox = React.memo(function InputBox(props: InputBoxProps) {
  const codeMirrorOptions = {
    lineNumbers: false,
    value: 'p and q',
  };

  return (
    <CodeMirror
      value={props.query}
      onChange={props.onQueryChange}
      options={codeMirrorOptions}
    />
  );
});
