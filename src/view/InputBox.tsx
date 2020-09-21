import React from 'react';
import ReactCodeMirror from 'react-codemirror';
import CodeMirror from 'codemirror';
require('codemirror/lib/codemirror.css');
require('./InputBox.css');
require('codemirror/mode/python/python');

CodeMirror.defineMode('boolean-expressions', function(config, modeOptions) {
  const KEYWORDS = new Set([
    'and',
    'not',
    'or',
    'xor',
    'if',
    'then',
    'iff',
    'only',
    'true',
    'false',
    'equals',
    'imply',
    'implies',
    'nimply',
    'nimplies',
    'xnor',
    'nand',
    'nor',
    '<-',
    '<->',
    '->',
    '<=',
    '=>',
    '<=>',
    '<--',
    '-->',
    '<-->',
    '<==>',
    '<==',
    '==>',
    '=',
    '==',
    '<=/=',
    '=/=>',
    '<-/-',
    '-/->',
    '&',
    '&&',
    '|',
    '||',
    '=/=',
    '!=',
    '~=',
    '^',
    '\\/',
    '/\\',
    '!',
    '~',
  ]);
  return {
    token: function(stream, state) {
      const ch = stream.next();
      if (ch === ' ') {
        return null;
      }
      while (stream.peek() && stream.peek() !== ' ') {
        stream.next();
      }
      const word: string = stream.current();
      if (KEYWORDS.has(word)) {
        stream.eat('word: ' + word);
        return 'keyword';
      }
      stream.eat(word);
      return null;
    },
  };
});

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
    mode: { name: 'boolean-expressions' },
    viewportMargin: Infinity,
  };

  return (
    <div>
      <ReactCodeMirror
        value={props.query}
        onChange={props.onQueryChange}
        options={codeMirrorOptions}
      />
    </div>
  );
});
