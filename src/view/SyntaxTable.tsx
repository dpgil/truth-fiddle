import React from 'react';

export const SyntaxTable = React.memo(function SyntaxTable() {
  return (
    <div className="Syntax-Table">
      <table>
        <tbody>
          <tr>
            <th>Operation</th>
            <th>Syntax</th>
          </tr>
          <tr>
            <td>
              <a
                href="https://en.wikipedia.org/wiki/Negation"
                target="_blank"
                rel="noopener noreferrer"
              >
                Negation
              </a>
            </td>
            <td>!</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://en.wikipedia.org/wiki/Logical_conjunction"
                target="_blank"
                rel="noopener noreferrer"
              >
                Conjuction
              </a>
            </td>
            <td>&amp;&amp;</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://en.wikipedia.org/wiki/Logical_disjunction"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inclusive Disjunction
              </a>
            </td>
            <td>||</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://en.wikipedia.org/wiki/Exclusive_or"
                target="_blank"
                rel="noopener noreferrer"
              >
                Exclusive Disjunction
              </a>
            </td>
            <td>^</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://en.wikipedia.org/wiki/Material_conditional"
                target="_blank"
                rel="noopener noreferrer"
              >
                Implication
              </a>
            </td>
            <td>-&gt;</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://en.wikipedia.org/wiki/Converse_implication"
                target="_blank"
                rel="noopener noreferrer"
              >
                Converse Implication
              </a>
            </td>
            <td>&lt;-</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://en.wikipedia.org/wiki/If_and_only_if"
                target="_blank"
                rel="noopener noreferrer"
              >
                Biconditional
              </a>
            </td>
            <td>&lt;-&gt;</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://en.wikipedia.org/wiki/Logical_NOR"
                target="_blank"
                rel="noopener noreferrer"
              >
                Joint Denial
              </a>
            </td>
            <td>NOR</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://en.wikipedia.org/wiki/Logical_equality"
                target="_blank"
                rel="noopener noreferrer"
              >
                Equality
              </a>
            </td>
            <td>=</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://en.wikipedia.org/wiki/Sheffer_stroke"
                target="_blank"
                rel="noopener noreferrer"
              >
                Alternative Denial
              </a>
            </td>
            <td>NAND</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://en.wikipedia.org/wiki/Material_nonimplication"
                target="_blank"
                rel="noopener noreferrer"
              >
                Material Nonimplication
              </a>
            </td>
            <td>-/-&gt;</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://en.wikipedia.org/wiki/Converse_nonimplication"
                target="_blank"
                rel="noopener noreferrer"
              >
                Converse Nonimplication
              </a>
            </td>
            <td>&lt;-/-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
});
